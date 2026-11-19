import { describe, expect, it } from 'vitest';
import { linkTargets, parseRichText, toPlainText } from './richText';

describe('parseRichText', () => {
  it('splits bold, code and links from plain text', () => {
    expect(parseRichText('Press **Save**, type `:smile:` or see [Privacy](#privacy).')).toEqual([
      { type: 'text', text: 'Press ' },
      { type: 'strong', text: 'Save' },
      { type: 'text', text: ', type ' },
      { type: 'code', text: ':smile:' },
      { type: 'text', text: ' or see ' },
      { type: 'link', text: 'Privacy', href: '#privacy' },
      { type: 'text', text: '.' },
    ]);
  });

  it('keeps text without markup as one token', () => {
    expect(parseRichText('Just text')).toEqual([{ type: 'text', text: 'Just text' }]);
  });

  it('parses external links and page routes', () => {
    expect(parseRichText('[DB-IP](https://db-ip.com) and [Terms](#/terms)')).toEqual([
      { type: 'link', text: 'DB-IP', href: 'https://db-ip.com' },
      { type: 'text', text: ' and ' },
      { type: 'link', text: 'Terms', href: '#/terms' },
    ]);
  });

  it('does not turn other link targets into links', () => {
    expect(parseRichText('[x](javascript:alert(1))')).toEqual([{ type: 'text', text: '[x](javascript:alert(1))' }]);
  });

  it('returns the plain text and only in-page link targets', () => {
    const source = '**Mute** a chat, see [Notifications](#notifications), the [Terms](#/terms) or [site](https://example.com)';
    expect(toPlainText(source)).toBe('Mute a chat, see Notifications, the Terms or site');
    expect(linkTargets(source)).toEqual(['notifications']);
  });
});
