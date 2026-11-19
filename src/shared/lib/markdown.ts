export type MarkdownBlock =
  | { kind: 'heading'; level: 1 | 2 | 3 | 4; text: string; id: string }
  | { kind: 'paragraph'; lines: string[] }
  | { kind: 'list'; ordered: boolean; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'rule' };

const HEADING = /^(#{1,4})\s+(.*)$/;
const BULLET = /^[-*]\s+(.*)$/;
const NUMBERED = /^\d+\.\s+(.*)$/;
const TABLE_ROW = /^\|.*\|\s*$/;
const TABLE_DIVIDER = /^\|(\s*:?-{3,}:?\s*\|)+\s*$/;
const RULE = /^-{3,}\s*$/;

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');

const cells = (row: string) => row.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());

const startsBlock = (line: string) =>
  HEADING.test(line) || BULLET.test(line) || NUMBERED.test(line) || TABLE_ROW.test(line) || RULE.test(line);

export const parseMarkdown = (source: string): MarkdownBlock[] => {
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const blocks: MarkdownBlock[] = [];
  const used = new Map<string, number>();
  const uniqueId = (text: string) => {
    const base = slugify(text) || 'section';
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  };

  let index = 0;
  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index++;
      continue;
    }
    const heading = HEADING.exec(line);
    if (heading) {
      const text = heading[2].trim();
      blocks.push({ kind: 'heading', level: heading[1].length as 1 | 2 | 3 | 4, text, id: uniqueId(text) });
      index++;
      continue;
    }
    if (RULE.test(line)) {
      blocks.push({ kind: 'rule' });
      index++;
      continue;
    }
    if (TABLE_ROW.test(line) && TABLE_DIVIDER.test(lines[index + 1] ?? '')) {
      const head = cells(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && TABLE_ROW.test(lines[index])) rows.push(cells(lines[index++]));
      blocks.push({ kind: 'table', head, rows });
      continue;
    }
    const ordered = NUMBERED.test(line);
    if (ordered || BULLET.test(line)) {
      const marker = ordered ? NUMBERED : BULLET;
      const items: string[] = [];
      while (index < lines.length) {
        const current = lines[index];
        const item = marker.exec(current);
        if (item) items.push(item[1].trim());
        else if (/^\s+\S/.test(current) && items.length) items[items.length - 1] += ` ${current.trim()}`;
        else break;
        index++;
      }
      blocks.push({ kind: 'list', ordered, items });
      continue;
    }
    const paragraph: string[] = [];
    let current = '';
    while (index < lines.length && lines[index].trim() && (paragraph.length + current.length === 0 || !startsBlock(lines[index]))) {
      const raw = lines[index];
      current = current ? `${current} ${raw.trim()}` : raw.trim();
      if (/ {2,}$/.test(raw)) {
        paragraph.push(current);
        current = '';
      }
      index++;
    }
    if (current) paragraph.push(current);
    blocks.push({ kind: 'paragraph', lines: paragraph });
  }
  return blocks;
};

export const markdownTitle = (blocks: MarkdownBlock[]) =>
  blocks.find((block): block is Extract<MarkdownBlock, { kind: 'heading' }> => block.kind === 'heading' && block.level === 1)?.text ?? '';
