import { describe, expect, it } from 'vitest';
import { parseMarkdown, type MarkdownBlock } from '@/shared/lib/markdown';
import { parseRichText } from '@/shared/lib/richText';
import { LANGUAGES, LEGAL_DOCS } from '@/shared/lib/route';
import { documentSource, hasLanguage, isTranslated, languagesOf } from './documents';

const TRANSLATED = LEGAL_DOCS.filter(isTranslated);

const shape = (blocks: MarkdownBlock[]) => blocks.map((block) => {
  switch (block.kind) {
    case 'heading':
      return `h${block.level}`;
    case 'list':
      return `${block.ordered ? 'ol' : 'ul'}:${block.items.length}`;
    case 'table':
      return `table:${block.head.length}x${block.rows.length}`;
    default:
      return block.kind;
  }
}).filter((kind) => kind !== 'paragraph');

const links = (source: string) =>
  parseRichText(source).flatMap((token) => (token.type === 'link' ? [token.href] : [])).sort();

const placeholders = (source: string) => (source.match(/\[(DATE OF PUBLICATION|TO DECIDE:[^\]]*)\]/g) ?? []).sort();

describe('legal documents', () => {
  it('has the imprint as one document for every language', () => {
    expect(isTranslated('imprint')).toBe(false);
    expect(languagesOf('imprint')).toEqual([]);
    expect(documentSource('imprint', 'ru')).toContain('Impressum');
  });

  it.each(TRANSLATED)('%s exists in every language', (doc) => {
    expect(LANGUAGES.filter((lang) => !hasLanguage(doc, lang))).toEqual([]);
  });

  it.each(TRANSLATED.flatMap((doc) => LANGUAGES.filter((lang) => lang !== 'en').map((lang) => [doc, lang] as const)))(
    '%s in %s keeps the structure, links and placeholders of the English text',
    (doc, lang) => {
      const english = documentSource(doc, 'en');
      const translated = documentSource(doc, lang);
      expect(shape(parseMarkdown(translated))).toEqual(shape(parseMarkdown(english)));
      expect(links(translated)).toEqual(links(english));
      expect(placeholders(translated)).toEqual(placeholders(english));
    },
  );

  it('keeps the operator address and contact in every privacy policy', () => {
    for (const lang of LANGUAGES) {
      const source = documentSource('privacy', lang);
      expect(source).toContain('Bergstraße 5');
      expect(source).toContain('myron.ilchenko@gmail.com');
    }
  });
});
