import type { Language, LegalDoc } from '@/shared/lib/route';

interface Labels {
  onThisPage: string;
  language: string;
  help: string;
  documents: Record<LegalDoc, string>;
}

export const LABELS: Record<Language, Labels> = {
  en: {
    onThisPage: 'On this page',
    language: 'Language',
    help: 'Help',
    documents: { privacy: 'Privacy Policy', terms: 'Terms of Use', guidelines: 'Community Guidelines', imprint: 'Imprint' },
  },
  de: {
    onThisPage: 'Auf dieser Seite',
    language: 'Sprache',
    help: 'Hilfe',
    documents: { privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen', guidelines: 'Community-Richtlinien', imprint: 'Impressum' },
  },
  ru: {
    onThisPage: 'На этой странице',
    language: 'Язык',
    help: 'Помощь',
    documents: { privacy: 'Политика конфиденциальности', terms: 'Условия использования', guidelines: 'Правила сообщества', imprint: 'Impressum' },
  },
  es: {
    onThisPage: 'En esta página',
    language: 'Idioma',
    help: 'Ayuda',
    documents: { privacy: 'Política de privacidad', terms: 'Condiciones de uso', guidelines: 'Normas de la comunidad', imprint: 'Aviso legal' },
  },
};
