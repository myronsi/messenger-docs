import { useEffect, type RefObject } from 'react';

const HIGHLIGHT_NAME = 'help-search';

const supportsHighlights = () => typeof CSS !== 'undefined' && 'highlights' in CSS && typeof Highlight !== 'undefined';

export const findRanges = (root: Node, words: string[]): Range[] => {
  const ranges: Range[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const value = (node.nodeValue ?? '').toLowerCase();
    for (const word of words) {
      for (let index = value.indexOf(word); index !== -1; index = value.indexOf(word, index + word.length)) {
        const range = document.createRange();
        range.setStart(node, index);
        range.setEnd(node, index + word.length);
        ranges.push(range);
      }
    }
  }
  return ranges;
};

export const useSearchHighlight = (rootRef: RefObject<HTMLElement | null>, words: string[]) => {
  const key = words.join(' ');

  useEffect(() => {
    if (!supportsHighlights()) return;
    const root = rootRef.current;
    const terms = key.split(' ').filter(Boolean);
    if (!root || terms.length === 0) {
      CSS.highlights.delete(HIGHLIGHT_NAME);
      return;
    }
    CSS.highlights.set(HIGHLIGHT_NAME, new Highlight(...findRanges(root, terms)));
    return () => {
      CSS.highlights.delete(HIGHLIGHT_NAME);
    };
  }, [rootRef, key]);
};
