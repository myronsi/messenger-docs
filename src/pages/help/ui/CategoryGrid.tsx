import { ChevronRight } from 'lucide-react';
import type { TopicGroup } from '../model/types';

const CategoryGrid = ({ groups }: { groups: TopicGroup[] }) => (
  <nav aria-label="Browse by topic">
    <ul className="grid gap-3 sm:grid-cols-2">
      {groups.map(({ id, title, summary, icon: Icon, topics }) => (
        <li key={id}>
          <a
            href={`#${topics[0].id}`}
            className="group flex h-full items-start gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-accent/40"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1 text-[0.9375rem] font-semibold text-foreground">
                {title}
                <ChevronRight aria-hidden="true" className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="mt-0.5 block text-sm leading-6 text-subtle-foreground">{summary}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{topics.length === 1 ? '1 guide' : `${topics.length} guides`}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default CategoryGrid;
