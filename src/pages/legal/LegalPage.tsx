import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ChevronDown, ListTree } from 'lucide-react';
import { markdownTitle, parseMarkdown } from '@/shared/lib/markdown';
import { LEGAL_DOCS, routeHref, type Language, type LegalDoc } from '@/shared/lib/route';
import { cn } from '@/shared/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/ui/collapsible';
import Markdown from '@/shared/ui/Markdown';
import { SiteFooter, SiteHeader } from '@/widgets/site-chrome';
import { documentSource, LANGUAGE_NAMES, languagesOf } from './model/documents';
import { LABELS } from './model/labels';

interface LegalPageProps {
  doc: LegalDoc;
  lang: Language;
  appUrl: string;
  onLanguageChange: (lang: Language) => void;
}

const scrollToSection = (id: string) => {
  const target = document.getElementById(id);
  target?.scrollIntoView({ behavior: 'instant', block: 'start' });
};

const LegalPage = ({ doc, lang, appUrl, onLanguageChange }: LegalPageProps) => {
  const labels = LABELS[lang];
  const blocks = useMemo(() => parseMarkdown(documentSource(doc, lang)), [doc, lang]);
  const title = markdownTitle(blocks) || labels.documents[doc];
  const sections = blocks.flatMap((block) => (block.kind === 'heading' && block.level === 2 ? [block] : []));
  const languages = languagesOf(doc);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    document.title = `${title} · Messenger`;
    document.documentElement.lang = languages.length ? lang : 'de';
    return () => {
      document.title = 'Messenger Help';
      document.documentElement.lang = 'en';
    };
  }, [title, lang, languages.length]);

  const sectionList = (onPick?: () => void) => (
    <ul className="space-y-0.5">
      {sections.map((section) => (
        <li key={section.id}>
          <button type="button" onClick={() => { onPick?.(); scrollToSection(section.id); }}
            className="block w-full rounded-md px-3 py-1.5 text-left text-sm text-subtle-foreground transition-colors hover:bg-accent hover:text-foreground">
            {section.text.replace(/\*\*/g, '')}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader appUrl={appUrl} />

      <div className="border-b border-border bg-gradient-to-br from-primary/10 to-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-4">
          <a href="#/" className="inline-flex items-center gap-1.5 text-sm text-subtle-foreground hover:text-foreground">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            {labels.help}
          </a>
          <div className="flex-1" />
          {languages.length > 1 && (
            <div role="group" aria-label={labels.language} className="grid h-9 grid-cols-4 rounded-md border border-border bg-muted p-1">
              {languages.map((option) => (
                <button key={option} type="button" lang={option} title={LANGUAGE_NAMES[option]} aria-pressed={option === lang}
                  onClick={() => onLanguageChange(option)}
                  className={cn('rounded px-2.5 text-xs font-medium uppercase transition-colors',
                    option === lang ? 'bg-background text-foreground shadow-sm' : 'text-subtle-foreground hover:text-foreground')}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
        <nav aria-label="Legal documents" className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 pb-3">
          {LEGAL_DOCS.map((item) => (
            <a key={item} href={routeHref(item, lang)} aria-current={item === doc ? 'page' : undefined}
              className={cn('whitespace-nowrap rounded-full border px-3 py-1 text-sm transition-colors',
                item === doc ? 'border-primary/40 bg-primary/10 font-medium text-primary'
                  : 'border-border bg-card text-subtle-foreground hover:text-foreground')}>
              {LABELS[lang].documents[item]}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
        {sections.length > 0 && (
          <>
            <nav aria-label={labels.onThisPage} className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] self-start overflow-y-auto pb-6 lg:block">
              <p className="px-3 pb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">{labels.onThisPage}</p>
              {sectionList()}
            </nav>
            <Collapsible open={tocOpen} onOpenChange={setTocOpen} className="rounded-lg border border-border bg-card lg:hidden">
              <CollapsibleTrigger className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-foreground">
                <ListTree aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                <span className="flex-1">{labels.onThisPage}</span>
                <ChevronDown aria-hidden="true" className={cn('h-4 w-4 text-muted-foreground transition-transform', tocOpen && 'rotate-180')} />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <nav aria-label={labels.onThisPage} className="border-t border-border px-1 py-3">{sectionList(() => setTocOpen(false))}</nav>
              </CollapsibleContent>
            </Collapsible>
          </>
        )}
        <main id="content" lang={languages.length ? lang : undefined} className={cn('min-w-0 max-w-3xl', sections.length === 0 && 'lg:col-span-2')}>
          <Markdown blocks={blocks} />
        </main>
      </div>

      <SiteFooter appUrl={appUrl} />
    </div>
  );
};

export default LegalPage;
