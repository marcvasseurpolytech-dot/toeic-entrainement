// Courses (not tests): a page opened by class from the admin, like the tests.
// Closed by default: a course is open only when the admin has ticked at least one class for it.
var COURSES = {
  "course-rtbf": {
    name: "The Right to be Forgotten",
    group: "tc3",
    page: "rtbf.html",
    meta: "Article, vocabulary, quiz, discussion, further reading"
  }
};
function courseIsOpen(accessTests, id) {
  return (accessTests || {})[id] === true;
}
