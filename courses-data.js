// Courses (not tests): a page opened by class from the admin, like the tests.
// Closed by default: a course is open only when the admin has ticked at least one class for it.
// tabs: the tabs of the page, in order (used by the admin activity view); mainTab / minMain: tab that must
// get real working time (seconds) before the "too little time" hint disappears; quiz: the page has a quiz;
// videos: the course has a video hand-in and a class vote.
var COURSES = {
  "course-rtbf": {
    name: "The Right to be Forgotten",
    group: "tc3",
    page: "rtbf.html",
    meta: "Article, vocabulary, quiz, discussion, further reading",
    tabs: [["read", "Read and answer"], ["vocab", "Vocabulary"], ["quiz", "Quiz"], ["debate", "Discussion"], ["further", "Further reading"]],
    mainTab: "read", minMain: 180, quiz: true, videos: false,
    feedback: "The Right to be Forgotten"
  },
  "course-scredit": {
    name: "China's Social Credit: Virtue or Fear?",
    group: "tc3",
    page: "scredit.html",
    meta: "Warm-up, research work, video project, class vote, toolbox",
    tabs: [["warm", "Warm-up"], ["work", "Research work"], ["send", "Hand in"], ["vote", "Vote"], ["tool", "Toolbox"]],
    mainTab: "work", minMain: 1200, quiz: false, videos: true,
    feedback: "China's Social Credit (warm-up on Hobbes, 10 questions on a video and an article, vocabulary, text of a short video)"
  }
};
function courseIsOpen(accessTests, id) {
  return (accessTests || {})[id] === true;
}
