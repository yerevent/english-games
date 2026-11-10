/* ============================================================================
   SCORES — where the kids' results are sent.

   STUDENTS   the names the kids choose from when they open abc.html
   SCORES_URL the address of the Google Apps Script that saves results into
              a Google Sheet (see scores-apps-script.gs for the script and
              how to set it up). Leave it "" and results are only kept on
              the device the child played on.
   ============================================================================ */

window.STUDENTS = [
  { id:"Ashot",  ru:"Ашот",   e:"👦" },
  { id:"Arianna", ru:"Арианна", e:"👧" }
];

window.SCORES_URL = "https://script.google.com/macros/s/AKfycbzKmP5rJO_WSsWmzO9MJgFeWJQ7sN6s1JUCcwDcWxSgjJRKxcgNVk5qZ6uxo5OvzXW1Eg/exec";
