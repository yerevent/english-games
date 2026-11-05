/**
 * English Games — kids' scores → Google Sheet
 *
 * SET UP (once, about 5 minutes)
 *  1. Make a new Google Sheet, e.g. "English Games scores".
 *  2. Extensions → Apps Script. Delete what is there, paste this whole file.
 *  3. Project Settings (gear) → Script properties → Add property:
 *        TEACHER_PIN   = a short code only you know, e.g. 4 digits
 *  4. Deploy → New deployment → type "Web app".
 *        Execute as: Me      Who has access: Anyone
 *     Copy the Web app URL (ends with /exec).
 *  5. Put that URL in content/scores-config.js:  window.SCORES_URL = "…/exec";
 *  6. In teacher.html → Scores, type your PIN once on your device.
 *
 * WHAT IT STORES: time, child's name, game, topic, right answers, total, stars.
 * Nothing else — no device or location data.
 */

const SHEET_NAME = "Scores";
const STUDENTS = ["Ashot", "Ariana"];
const HEADERS = ["time", "student", "game", "topic", "right", "total", "stars"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(HEADERS); sh.setFrozenRows(1); }
  return sh;
}

/* the kids' site sends one result at a time */
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (STUDENTS.indexOf(d.student) < 0) return out_({ ok: false, error: "unknown student" });
    const cut = (v, n) => String(v == null ? "" : v).slice(0, n);
    const num = v => Math.max(0, Math.min(999, Number(v) || 0));
    sheet_().appendRow([new Date(), d.student, cut(d.game, 40), cut(d.topic, 40), num(d.right), num(d.total), Math.max(0, Math.min(3, Number(d.stars) || 0))]);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

/* the teacher page reads results with the PIN */
function doGet(e) {
  const pin = PropertiesService.getScriptProperties().getProperty("TEACHER_PIN");
  if (!pin || !e.parameter || e.parameter.pin !== pin) return out_({ ok: false, error: "wrong pin" });
  const values = sheet_().getDataRange().getValues();
  const rows = values.slice(1).slice(-1000).map(r => ({
    t: r[0] instanceof Date ? r[0].toISOString() : String(r[0]),
    student: r[1], game: r[2], topic: r[3], right: r[4], total: r[5], stars: r[6]
  }));
  return out_({ ok: true, rows: rows });
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
