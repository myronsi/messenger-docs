import { LANGUAGES, isLanguage, type Language, type LegalDoc } from '@/shared/lib/route';

const SOURCES = import.meta.glob<string>('../content/*.md', { query: '?raw', import: 'default', eager: true });

const sourceKey = (doc: LegalDoc, lang: Language | null) => (lang ? `../content/${doc}.${lang}.md` : `../content/${doc}.md`);

export const isTranslated = (doc: LegalDoc) => !(sourceKey(doc, null) in SOURCES);

export const documentSource = (doc: LegalDoc, lang: Language): string =>
  SOURCES[sourceKey(doc, isTranslated(doc) ? lang : null)] ?? SOURCES[sourceKey(doc, 'en')] ?? '';

export const hasLanguage = (doc: LegalDoc, lang: Language) => sourceKey(doc, lang) in SOURCES;

const STORAGE_KEY = 'messenger-docs:legal-language';

export const preferredLanguage = (): Language => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && isLanguage(saved)) return saved;
  } catch {
    return 'en';
  }
  const fromBrowser = (navigator.languages ?? [navigator.language]).map((tag) => tag.slice(0, 2).toLowerCase()).find(isLanguage);
  return fromBrowser ?? 'en';
};

export const saveLanguage = (lang: Language) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    return;
  }
};

export const LANGUAGE_NAMES: Record<Language, string> = { en: 'English', de: 'Deutsch', ru: 'Русский', es: 'Español' };

export const languagesOf = (doc: LegalDoc): Language[] => (isTranslated(doc) ? LANGUAGES.filter((lang) => hasLanguage(doc, lang)) : []);
