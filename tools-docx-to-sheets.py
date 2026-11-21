"""Turn Anna's .docx lesson sheets into plain-text blocks for the website.

Driven by what the text says, not by Word styles — the three files use
different style numbering, but all three mark their structure the same way:
  PART 1. / ANSWER KEY / TEACHER NOTES   -> big heading
  1. Something                            -> section heading
  Exercise 4. Instruction                 -> an exercise, items follow
"""
import sys, io, re, json, zipfile
sys.stdout.reconfigure(encoding='utf-8')
from xml.etree import ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'

BIG = re.compile(r'^(PART\s+\d+\b|ANSWER\s+KEY|TEACHER\s+NOTES|PART\s+\d+\.|EXERCISES)', re.I)
SEC = re.compile(r'^\d+\.\s+\S')
SUB = re.compile(r'^([A-D]\.\s+\S|Rule\s+\d+|Positive sentences|Spelling rules|Structure:|Short answers|Short forms|Word bank)', re.I)
EXH = re.compile(r'^Exercise\s+(\d+)\s*[\.\:]?\s*(.*)$', re.I)
NOTE = re.compile(r'^(⚠|❌|✅|Remember[:\s]|Teacher[:\s]|Note[:\s]|Try using|Some words may|Time words are|In short answers)', re.I)
HTMLJUNK = re.compile(r'</?(details|summary|strong)>')


def para_text(p):
    return ''.join(t.text or '' for t in p.iter(W + 't'))


def read_blocks(path):
    root = ET.fromstring(zipfile.ZipFile(path).read('word/document.xml'))
    body = root.find(W + 'body')
    out = []
    in_ex = False

    for child in body:
        tag = child.tag.replace(W, '')

        if tag == 'tbl':
            rows = []
            for tr in child.iter(W + 'tr'):
                cells = [' '.join(para_text(p) for p in tc.iter(W + 'p')).strip()
                         for tc in tr.iter(W + 'tc')]
                if any(c for c in cells):
                    rows.append(cells)
            if rows:
                out.append({'t': 'table', 'head': rows[0], 'rows': rows[1:]})
            in_ex = False
            continue

        if tag != 'p':
            continue

        txt = HTMLJUNK.sub('', para_text(child)).strip()
        if not txt:
            continue

        m = EXH.match(txt)
        if m:
            out.append({'t': 'ex', 'n': int(m.group(1)), 'x': m.group(2).strip()})
            in_ex = True
            continue

        if BIG.match(txt):
            out.append({'t': 'h2', 'x': txt})
            in_ex = False
            continue

        if SEC.match(txt) and len(txt) < 90 and not in_ex:
            out.append({'t': 'h3', 'x': txt})
            continue

        if SUB.match(txt) and len(txt) < 90:
            out.append({'t': 'h4', 'x': txt})
            in_ex = False
            continue

        if NOTE.match(txt):
            out.append({'t': 'note', 'x': txt})
            continue

        out.append({'t': 'li' if in_ex else 'p', 'x': txt})

    return out


TEACHER_META = re.compile(
    r'^(Grade:|Duration|Goal:|This is a review|How I.d use this|What to pay attention)', re.I)


def tidy_front(blocks, title):
    """Drop the repeated title line and keep the teacher's own notes out of
    the student's view (everything before PART 1 that is written to Anna)."""
    out = []
    seen_part = False
    for b in blocks:
        if b['t'] == 'h2':
            seen_part = True
        if not seen_part:
            if b['t'] == 'p' and b['x'].split('—')[0].strip().lower() in (
                    title.split('—')[0].strip().lower(), title.lower()):
                continue                      # the title again
            if TEACHER_META.match(b['x']):
                b['k'] = 1
        out.append(b)
    return out


def mark_teacher(blocks):
    """Everything from the answer key onwards is for the teacher only."""
    teacher = False
    for b in blocks:
        if b['t'] == 'h2' and re.match(r'^(ANSWER\s+KEY|TEACHER\s+NOTES|PART\s+4\.\s*ANSWER)', b['x'], re.I):
            teacher = True
        if re.match(r'^How I.d use this review', b.get('x', '') or '', re.I):
            teacher = True
        if teacher:
            b['k'] = 1
    return blocks


SHEETS = [
    ('present-simple', 'Present Simple — Review',
     'Простое настоящее время — повторение', 'Present Simple.docx'),
    ('present-continuous', 'Present Continuous',
     'Настоящее длительное время', 'Present_Continuous_Grade_5_Lesson.docx'),
    ('present-continuous-homework', 'Present Continuous — Homework sheet',
     'Домашняя работа', 'homework.docx'),
]

docs = []
for sid, title, ru, fname in SHEETS:
    blocks = mark_teacher(tidy_front(read_blocks(fname), title))
    docs.append({'id': sid, 'title': title, 'ru': ru, 'blocks': blocks})
    kinds = {}
    for b in blocks:
        kinds[b['t']] = kinds.get(b['t'], 0) + 1
    print('%-30s %3d blocks  %s  teacher-only: %d'
          % (sid, len(blocks), kinds, sum(1 for b in blocks if b.get('k'))))

io.open(sys.argv[1], 'w', encoding='utf-8').write(
    '/* AUTO-GENERATED from Anna\'s .docx lesson sheets — see scratchpad/convert.py */\n'
    'window.G5_SHEETS_DOCS = ' + json.dumps(docs, ensure_ascii=False, indent=1) + ';\n')
print('\nwritten:', sys.argv[1])
