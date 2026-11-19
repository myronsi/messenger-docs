import { useMemo, useRef, useState } from 'react';
import { SearchX } from 'lucide-react';
import { HELP_GROUPS, POPULAR_TOPICS } from './model/content/groups';
import { filterGroups, searchWords } from './model/search';
import { useActiveTopic } from './model/useActiveTopic';
import { useSearchHighlight } from './model/useSearchHighlight';
import { scrollToTarget, useInPageLinks } from './model/useInPageLinks';
import { useSlashFocus } from './model/useSlashFocus';
import CategoryGrid from './ui/CategoryGrid';
import ContentsNav from './ui/ContentsNav';
import SearchBox from './ui/SearchBox';
import { SiteFooter, SiteHeader } from '@/widgets/site-chrome';
import TopicCard from './ui/TopicCard';

const ALL_TOPICS = HELP_GROUPS.flatMap((group) => group.topics);
const POPULAR = POPULAR_TOPICS.flatMap((id) => ALL_TOPICS.filter((topic) => topic.id === id));

const HelpPage = ({ appUrl }: { appUrl: string }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const groups = useMemo(() => filterGroups(HELP_GROUPS, query), [query]);
  const words = useMemo(() => searchWords(query), [query]);
  const activeId = useActiveTopic(groups.flatMap((group) => group.topics.map((topic) => topic.id)));
  const found = groups.reduce((count, group) => count + group.topics.length, 0);

  useSearchHighlight(mainRef, words);
  useSlashFocus(inputRef);
  useInPageLinks();

  const openFirstResult = () => {
    const first = groups[0]?.topics[0];
    const target = first ? document.getElementById(first.id) : null;
    if (target) scrollToTarget(target);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <a href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-30 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <SiteHeader appUrl={appUrl} />

      <section id="top" className="scroll-mt-14 border-b border-border bg-gradient-to-br from-primary/10 to-background">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pt-16">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">How can we help?</h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-subtle-foreground sm:text-lg">
            Short, step-by-step guides for everything you can do in Messenger: from your first chat to calls, stickers, privacy and keeping your account safe.
          </p>
          <div className="mt-7">
            <SearchBox value={query} onChange={setQuery} onSubmit={openFirstResult} inputRef={inputRef} />
          </div>
          <nav aria-label="Popular topics" className="mt-4 flex flex-wrap gap-2">
            {POPULAR.map((topic) => (
              <a key={topic.id} href={`#${topic.id}`}
                className="rounded-full border border-border bg-card px-3 py-1 text-sm text-subtle-foreground transition-colors hover:border-primary/40 hover:text-primary">
                {topic.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl flex-1 gap-6 px-4 py-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
        <ContentsNav groups={groups} activeId={activeId} />

        <main id="content" ref={mainRef} tabIndex={-1} className="min-w-0 space-y-12 outline-none">
          <p role="status" className="sr-only">{query ? `${found} ${found === 1 ? 'topic' : 'topics'} found` : ''}</p>
          {!query.trim() && <CategoryGrid groups={HELP_GROUPS} />}
          {groups.length === 0 && (
            <div className="flex flex-col items-center gap-3 rounded-lg border border-dashed border-border px-6 py-14 text-center">
              <SearchX aria-hidden="true" className="h-8 w-8 text-muted-foreground" />
              <p className="text-base font-medium text-foreground">No help topic matches "{query.trim()}"</p>
              <p className="text-sm text-muted-foreground">Try a shorter or different word.</p>
            </div>
          )}
          {groups.map((group) => (
            <section key={group.id} aria-labelledby={`${group.id}-heading`} className="space-y-4">
              <h2 id={`${group.id}-heading`} className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{group.title}</h2>
              {group.topics.map((topic) => <TopicCard key={topic.id} topic={topic} />)}
            </section>
          ))}
        </main>
      </div>

      <SiteFooter appUrl={appUrl} />
    </div>
  );
};

export default HelpPage;
