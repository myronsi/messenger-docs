import { useState } from 'react';
import { ChevronDown, ListTree } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/ui/collapsible';
import { cn } from '@/shared/lib/utils';
import type { TopicGroup } from '../model/types';

interface ContentsListProps {
  groups: TopicGroup[];
  activeId: string | null;
  onNavigate?: () => void;
}

const ContentsList = ({ groups, activeId, onNavigate }: ContentsListProps) => (
  <div className="space-y-5">
    {groups.map((group) => (
      <div key={group.id}>
        <p className="px-3 pb-1.5 text-xs font-medium uppercase tracking-wide text-muted-foreground">{group.title}</p>
        <ul className="space-y-0.5">
          {group.topics.map((topic) => (
            <li key={topic.id}>
              <a
                href={`#${topic.id}`}
                onClick={onNavigate}
                aria-current={activeId === topic.id ? 'location' : undefined}
                className={cn(
                  'block rounded-md px-3 py-1.5 text-sm transition-colors',
                  activeId === topic.id
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'text-subtle-foreground hover:bg-accent hover:text-foreground',
                )}
              >
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

const ContentsNav = ({ groups, activeId }: Omit<ContentsListProps, 'onNavigate'>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav aria-label="Contents" className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] overflow-y-auto pb-6 lg:block">
        <ContentsList groups={groups} activeId={activeId} />
      </nav>
      <Collapsible open={open} onOpenChange={setOpen} className="rounded-lg border border-border bg-card lg:hidden">
        <CollapsibleTrigger className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-foreground">
          <ListTree aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
          <span className="flex-1">Contents</span>
          <ChevronDown aria-hidden="true" className={cn('h-4 w-4 text-muted-foreground transition-transform', open && 'rotate-180')} />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav aria-label="Contents" className="border-t border-border px-1 py-4">
            <ContentsList groups={groups} activeId={activeId} onNavigate={() => setOpen(false)} />
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default ContentsNav;
