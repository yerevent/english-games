/* ============================================================================
   SCORES — where the kids' results are sent.

   STUDENTS      the names the kids choose from when they open abc.html
   BIG_STUDENTS  older students on the big kids' site, index.html
   SCORES_URL the address of the Google Apps Script that saves results into
              a Google Sheet (see scores-apps-script.gs for the script and
              how to set it up). Leave it "" and results are only kept on
              the device the child played on.
   ============================================================================ */

window.STUDENTS = [
  { id:"Ashot",  ru:"Ашот",   e:"👦" },
  { id:"Arianna", ru:"Арианна", e:"👧" }
];

/* Other spellings of a name → the real one. Results and homework saved under
   the other spelling count as hers, and the site always shows the real name. */
window.STUDENT_ALIASES = { "Ariana":"Arianna" };

/* Older students on the big kids' site (index.html). They get a personal
   link like  index.html?student=Alex  and their results go to the same
   Google Sheet, but the teacher page lists them in their own section. */
/* course:"g5" means this student sees ONLY the school textbook course.
   Leave course out and the student sees the whole site. */
window.BIG_STUDENTS = [
  { id:"Alex", e:"🧑‍🎓", course:"g5" }
];

window.SCORES_URL = "https://script.google.com/macros/s/AKfycbzKmP5rJO_WSsWmzO9MJgFeWJQ7sN6s1JUCcwDcWxSgjJRKxcgNVk5qZ6uxo5OvzXW1Eg/exec";
