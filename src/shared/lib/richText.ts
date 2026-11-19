export type RichToken =
  | { type: 'text'; text: string }
  | { type: 'strong'; text: string }
  | { type: 'code'; text: string }
  | { type: 'link'; text: string; href: string };

const PATTERN = /\*\*(.+?)\*\*|`(.+?)`|\[(.+?)\]\((#[\w/-]+|https?:\/\/[^\s)]+)\)/g;

export const parseRichText = (source: string): RichToken[] => {
  const tokens: RichToken[] = [];
  let last = 0;
  for (const match of source.matchAll(PATTERN)) {
    const index = match.index ?? 0;
    if (index > last) tokens.push({ type: 'text', text: source.slice(last, index) });
    const [, strong, code, label, href] = match;
    if (strong !== undefined) tokens.push({ type: 'strong', text: strong });
    else if (code !== undefined) tokens.push({ type: 'code', text: code });
    else tokens.push({ type: 'link', text: label, href });
    last = index + match[0].length;
  }
  if (last < source.length) tokens.push({ type: 'text', text: source.slice(last) });
  return tokens;
};

export const toPlainText = (source: string): string => parseRichText(source).map((token) => token.text).join('');

export const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export const isRouteHref = (href: string) => href.startsWith('#/');

export const linkTargets = (source: string): string[] =>
  parseRichText(source).flatMap((token) =>
    token.type === 'link' && !isExternalHref(token.href) && !isRouteHref(token.href) ? [token.href.slice(1)] : []);
