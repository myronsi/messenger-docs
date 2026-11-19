import { useCallback, useEffect, useState } from 'react';

export const LEGAL_DOCS = ['privacy', 'terms', 'guidelines', 'imprint'] as const;
export const LANGUAGES = ['en', 'de', 'ru', 'es'] as const;

export type LegalDoc = (typeof LEGAL_DOCS)[number];
export type Language = (typeof LANGUAGES)[number];
export type Route = { page: 'help' } | { page: 'legal'; doc: LegalDoc; lang: Language | null };

const isLegalDoc = (value: string): value is LegalDoc => (LEGAL_DOCS as readonly string[]).includes(value);
export const isLanguage = (value: string): value is Language => (LANGUAGES as readonly string[]).includes(value);

export const parseRoute = (hash: string): Route => {
  if (!hash.startsWith('#/')) return { page: 'help' };
  const [doc = '', lang = ''] = hash.slice(2).split('/');
  if (!isLegalDoc(doc)) return { page: 'help' };
  return { page: 'legal', doc, lang: isLanguage(lang) ? lang : null };
};

export const routeHref = (doc: LegalDoc, lang?: Language) => (lang ? `#/${doc}/${lang}` : `#/${doc}`);

export const useRoute = () => {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  const go = useCallback((hash: string, replace = false) => {
    try {
      if (replace) window.history.replaceState(null, '', hash);
      else window.history.pushState(null, '', hash);
    } catch {
      return setRoute(parseRoute(hash));
    }
    setRoute(parseRoute(hash));
  }, []);

  useEffect(() => {
    const sync = () => setRoute(parseRoute(window.location.hash));
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#/"]') : null;
      if (!link) return;
      event.preventDefault();
      go(link.getAttribute('href') ?? '#/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
      document.removeEventListener('click', onClick);
    };
  }, [go]);

  return { route, go };
};
