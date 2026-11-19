import { describe, expect, it } from 'vitest';
import { markdownTitle, parseMarkdown, slugify } from './markdown';

describe('parseMarkdown', () => {
  it('reads headings, paragraphs joined across lines, and hard line breaks', () => {
    const blocks = parseMarkdown([
      '# Privacy Policy',
      '',
      'This policy explains',
      'what we do.',
      '',
      'Myron Ilchenko  ',
      'Bergstraße 5  ',
      'Germany',
    ].join('\n'));
    expect(blocks).toEqual([
      { kind: 'heading', level: 1, text: 'Privacy Policy', id: 'privacy-policy' },
      { kind: 'paragraph', lines: ['This policy explains what we do.'] },
      { kind: 'paragraph', lines: ['Myron Ilchenko', 'Bergstraße 5', 'Germany'] },
    ]);
    expect(markdownTitle(blocks)).toBe('Privacy Policy');
  });

  it('reads bullet and numbered lists with wrapped items', () => {
    expect(parseMarkdown('- one\n- two\n  continued\n\n1. first\n2. second')).toEqual([
      { kind: 'list', ordered: false, items: ['one', 'two continued'] },
      { kind: 'list', ordered: true, items: ['first', 'second'] },
    ]);
  });

  it('reads tables and rules', () => {
    expect(parseMarkdown('| Data | Kept |\n|---|---|\n| Messages | **No limit** |\n\n---')).toEqual([
      { kind: 'table', head: ['Data', 'Kept'], rows: [['Messages', '**No limit**']] },
      { kind: 'rule' },
    ]);
  });

  it('gives repeated headings unique ids', () => {
    const ids = parseMarkdown('## Contact\n\n## Contact').map((block) => (block.kind === 'heading' ? block.id : ''));
    expect(ids).toEqual(['contact', 'contact-2']);
  });

  it('builds ids from any script', () => {
    expect(slugify('3. Данные, которые мы обрабатываем')).toBe('3-данные-которые-мы-обрабатываем');
    expect(slugify('9. Decisiones automáticas')).toBe('9-decisiones-automaticas');
  });
});
