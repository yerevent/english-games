/**
 * English Games — kids' scores and homework → Google Sheet
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
 * UPDATING THIS SCRIPT LATER (keeps the same URL)
 *  Paste the new code, save, then Deploy → Manage deployments → ✏️ (edit)
 *  → Version: "New version" → Deploy.
 *
 * WHAT IT STORES
 *  Scores:   time, child's name, game, topic, right answers, total, stars.
 *  Homework: id, when it was given, who (Ashot / Arianna / both), game, topic.
 *  Nothing else — no device or location data.
 */

const SHEET_NAME = "Scores";
const HW_SHEET = "Homework";
const STUDENTS = ["Ashot", "Arianna"];
const HEADERS = ["time", "student", "game", "topic", "right", "total", "stars"];
const HW_HEADERS = ["id", "created", "who", "game", "topic"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); sh.appendRow(HEADERS); sh.setFrozenRows(1); }
  return sh;
}
function hwSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(HW_SHEET);
  if (!sh) { sh = ss.insertSheet(HW_SHEET); sh.appendRow(HW_HEADERS); sh.setFrozenRows(1); }
  return sh;
}
function pinOk_(pin) {
  const real = PropertiesService.getScriptProperties().getProperty("TEACHER_PIN");
  return !!real && String(pin) === real;
}
const cut_ = (v, n) => String(v == null ? "" : v).slice(0, n);
const iso_ = v => v instanceof Date ? v.toISOString() : String(v);

/* the kids' site sends one result at a time; the teacher page sends homework changes */
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (d.action) return out_(homeworkPost_(d));
    if (STUDENTS.indexOf(d.student) < 0) return out_({ ok: false, error: "unknown student" });
    const num = v => Math.max(0, Math.min(999, Number(v) || 0));
    sheet_().appendRow([new Date(), d.student, cut_(d.game, 40), cut_(d.topic, 40), num(d.right), num(d.total), Math.max(0, Math.min(3, Number(d.stars) || 0))]);
    return out_({ ok: true });
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function homeworkPost_(d) {
  if (!pinOk_(d.pin)) return { ok: false, error: "wrong pin" };
  const sh = hwSheet_();
  if (d.action === "addHomework") {
    const who = d.who === "both" ? "both" : (STUDENTS.indexOf(d.who) >= 0 ? d.who : null);
    if (!who) return { ok: false, error: "unknown student" };
    sh.appendRow([Utilities.getUuid(), new Date(), who, cut_(d.game, 40), cut_(d.topic, 40)]);
    return { ok: true, items: homeworkAll_() };
  }
  if (d.action === "deleteHomework") {
    const ids = sh.getRange(1, 1, sh.getLastRow(), 1).getValues();
    for (let i = ids.length - 1; i >= 1; i--) if (String(ids[i][0]) === String(d.id)) sh.deleteRow(i + 1);
    return { ok: true, items: homeworkAll_() };
  }
  return { ok: false, error: "unknown action" };
}

/* every homework task, with done = finished after it was given, per child */
function homeworkAll_() {
  const hw = hwSheet_().getDataRange().getValues().slice(1);
  const scores = sheet_().getDataRange().getValues().slice(1);
  return hw.map(r => {
    const item = { id: String(r[0]), created: iso_(r[1]), who: r[2], game: String(r[3]), topic: String(r[4]), doneBy: {} };
    const kids = item.who === "both" ? STUDENTS : [item.who];
    kids.forEach(k => {
      item.doneBy[k] = scores.some(s => s[1] === k && String(s[2]) === item.game && String(s[3]) === item.topic && iso_(s[0]) >= item.created);
    });
    return item;
  });
}

function doGet(e) {
  const p = e.parameter || {};
  /* the kids' page asks: what homework do I have? (no PIN: it only lists tasks) */
  if (p.action === "homework") {
    if (STUDENTS.indexOf(p.student) < 0) return out_({ ok: false, error: "unknown student" });
    const items = homeworkAll_()
      .filter(h => h.who === p.student || h.who === "both")
      .map(h => ({ id: h.id, created: h.created, game: h.game, topic: h.topic, done: !!h.doneBy[p.student] }));
    return out_({ ok: true, items: items });
  }
  if (!pinOk_(p.pin)) return out_({ ok: false, error: "wrong pin" });
  /* the teacher page: all homework with who has done it */
  if (p.action === "homeworkAll") return out_({ ok: true, items: homeworkAll_() });
  /* the teacher page: scores */
  const values = sheet_().getDataRange().getValues();
  const rows = values.slice(1).slice(-1000).map(r => ({
    t: iso_(r[0]), student: r[1], game: r[2], topic: r[3], right: r[4], total: r[5], stars: r[6]
  }));
  return out_({ ok: true, rows: rows });
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
