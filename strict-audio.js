// Strict audio player for Listening tests (no pause, no seek, no replay) with a control log.
// Used by test.html when a test sets audioStrict: true and gives an audioSrc.
// The module has no dependency on the page: everything it needs is passed in create(),
// so it can be unit-tested with a fake audio element (see tests in the repo notes).
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.StrictAudio = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function create(opts) {
    const audio = opts.audio;
    const duration = opts.duration;                 // expected audio length, in seconds
    const now = opts.now || (() => Date.now());
    const doc = opts.doc || null;                   // document, for the tab visibility log
    const win = opts.win || null;                   // window, for the media session
    const setTimer = opts.setInterval || setInterval;
    const clearTimer = opts.clearInterval || clearInterval;
    const setTimeoutFn = opts.setTimeout || setTimeout;
    const clearTimeoutFn = opts.clearTimeout || clearTimeout;
    const onUpdate = opts.onUpdate || function () {};
    const onEnded = opts.onEnded || function () {};
    const onFallback = opts.onFallback || function () {};
    const LOAD_TIMEOUT_MS = opts.loadTimeoutMs || 15000;

    const log = Object.assign({
      startedAt: null, playedSec: 0, pauseAttempts: 0, pausedSec: 0, seekAttempts: 0,
      hiddenSec: 0, hiddenCount: 0, rejoins: 0, stalls: 0, fallback: false, ended: false
    }, opts.log || {});

    let startedAtMs = opts.startedAtMs || null;
    let started = false, ended = false, stopped = false, failed = false;
    let lastTime = 0, pauseStart = null, hiddenStart = null, seeking = false;
    let ticker = null, loadTimer = null, gotPlaying = false;

    function position() { return Math.max(0, Math.min(duration, audio.currentTime || 0)); }

    function fail(reason) {
      if (failed || stopped) return;
      failed = true;
      log.fallback = true;
      cleanup();
      onFallback(reason);
    }

    function tryPlay() {
      try {
        const p = audio.play();
        if (p && typeof p.catch === 'function') p.catch(function () { /* blocked: the next tick retries */ });
      } catch (e) { /* ignore */ }
    }

    function onPause() {
      if (ended || stopped || failed) return;
      log.pauseAttempts++;
      if (pauseStart === null) pauseStart = now();
      tryPlay();
    }
    function onPlaying() {
      gotPlaying = true;
      if (loadTimer) { clearTimeoutFn(loadTimer); loadTimer = null; }
      if (pauseStart !== null) { log.pausedSec += (now() - pauseStart) / 1000; pauseStart = null; }
    }
    function onTimeUpdate() {
      if (seeking) return;
      lastTime = audio.currentTime || 0;
      if (lastTime > log.playedSec) log.playedSec = lastTime;
    }
    function onSeeking() {
      if (seeking || ended || stopped) return;
      const ct = audio.currentTime || 0;
      // small jumps are normal buffering corrections; a real seek is blocked and logged
      if (Math.abs(ct - lastTime) > 1.5) {
        log.seekAttempts++;
        seeking = true;
        try { audio.currentTime = lastTime; } catch (e) { /* ignore */ }
        seeking = false;
      }
    }
    function onWaiting() { if (!ended && !stopped) log.stalls++; }
    function onEndedEvt() {
      if (stopped) return;
      ended = true; log.ended = true;
      if (log.playedSec < duration * 0.98) log.playedSec = audio.duration && isFinite(audio.duration) ? audio.duration : duration;
      cleanup();
      onUpdate(snapshot());
      onEnded();
    }
    function onErrorEvt() { fail('error'); }
    function onVisibility() {
      if (!doc) return;
      if (doc.visibilityState === 'hidden') {
        if (hiddenStart === null) { hiddenStart = now(); log.hiddenCount++; }
      } else if (hiddenStart !== null) {
        log.hiddenSec += (now() - hiddenStart) / 1000;
        hiddenStart = null;
        if (!ended && !stopped && audio.paused) tryPlay();
      }
    }

    function tick() {
      if (ended || stopped || failed) return;
      if (started && audio.paused) tryPlay();       // covers a pause event that never fired
      onUpdate(snapshot());
    }

    function snapshot() {
      const pos = ended ? duration : position();
      return { position: pos, remaining: Math.max(0, Math.round(duration - pos)), ended: ended, log: log };
    }

    function lockMediaSession() {
      try {
        const ms = win && win.navigator && win.navigator.mediaSession;
        if (!ms || !ms.setActionHandler) return;
        ['pause', 'stop', 'seekto', 'seekbackward', 'seekforward', 'previoustrack', 'nexttrack'].forEach(function (a) {
          try { ms.setActionHandler(a, function () { if (a === 'pause' || a === 'stop') tryPlay(); }); } catch (e) { /* unsupported action */ }
        });
      } catch (e) { /* ignore */ }
    }

    const handlers = [
      ['pause', onPause], ['playing', onPlaying], ['timeupdate', onTimeUpdate], ['seeking', onSeeking],
      ['waiting', onWaiting], ['ended', onEndedEvt], ['error', onErrorEvt]
    ];

    function cleanup() {
      if (ticker) { clearTimer(ticker); ticker = null; }
      if (loadTimer) { clearTimeoutFn(loadTimer); loadTimer = null; }
      handlers.forEach(function (h) { audio.removeEventListener(h[0], h[1]); });
      if (doc) doc.removeEventListener('visibilitychange', onVisibility);
    }

    // Starts the audio. offsetSec > 0 is used when a student comes back to a test whose audio
    // is already running: the audio rejoins where it would be if it had never stopped.
    function start(offsetSec) {
      if (started || stopped) return;
      started = true;
      if (startedAtMs === null) { startedAtMs = now(); log.startedAt = new Date(startedAtMs).toISOString(); }
      else if (!log.startedAt) log.startedAt = new Date(startedAtMs).toISOString();
      handlers.forEach(function (h) { audio.addEventListener(h[0], h[1]); });
      if (doc) doc.addEventListener('visibilitychange', onVisibility);
      lockMediaSession();
      if (offsetSec && offsetSec > 0) {
        log.rejoins++;
        // lastTime is set together with currentTime, so the seeking guard sees no jump
        const apply = function () { lastTime = offsetSec; try { audio.currentTime = offsetSec; } catch (e) { /* ignore */ } };
        if (audio.readyState >= 1) apply();
        else audio.addEventListener('loadedmetadata', function once() { audio.removeEventListener('loadedmetadata', once); apply(); });
      }
      tryPlay();
      ticker = setTimer(tick, 500);
      loadTimer = setTimeoutFn(function () { if (!gotPlaying) fail('timeout'); }, LOAD_TIMEOUT_MS);
    }

    function stop() {
      if (stopped) return;
      stopped = true;
      if (pauseStart !== null) { log.pausedSec += (now() - pauseStart) / 1000; pauseStart = null; }
      if (hiddenStart !== null) { log.hiddenSec += (now() - hiddenStart) / 1000; hiddenStart = null; }
      cleanup();
      try { audio.pause(); } catch (e) { /* ignore */ }
    }

    function getLog() {
      const out = Object.assign({}, log);
      if (pauseStart !== null) out.pausedSec += (now() - pauseStart) / 1000;
      if (hiddenStart !== null) out.hiddenSec += (now() - hiddenStart) / 1000;
      ['playedSec', 'pausedSec', 'hiddenSec'].forEach(function (k) { out[k] = Math.round(out[k]); });
      return out;
    }

    return {
      start: start, stop: stop, getLog: getLog,
      startedAt: function () { return startedAtMs; },
      isEnded: function () { return ended; },
      isRunning: function () { return started && !ended && !stopped && !failed; },
      snapshot: snapshot
    };
  }

  return { create: create };
});
