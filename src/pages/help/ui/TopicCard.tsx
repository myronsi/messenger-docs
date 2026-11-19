import type { LucideIcon } from 'lucide-react';
import type { Topic } from '../model/types';
import TopicBlock from './TopicBlock';

export const IconTile = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-subtle-foreground">
    <Icon aria-hidden="true" className="h-4 w-4" />
  </span>
);

const TopicCard = ({ topic }: { topic: Topic }) => (
  <article id={topic.id} tabIndex={-1} aria-labelledby={`${topic.id}-title`}
    className="scroll-mt-20 overflow-hidden rounded-lg border border-border bg-card outline-none focus-visible:ring-2 focus-visible:ring-ring">

    <header className="flex items-center gap-3 border-b border-border px-4 py-3 sm:px-5">
      <IconTile icon={topic.icon} />
      <h3 id={`${topic.id}-title`} className="min-w-0 flex-1 text-base font-semibold text-foreground">
        <a href={`#${topic.id}`} className="underline-offset-4 hover:underline">{topic.title}</a>
      </h3>
    </header>
    <div className="space-y-3 px-4 py-4 sm:px-5">
      {topic.blocks.map((block, index) => <TopicBlock key={index} block={block} />)}
    </div>
  </article>
);

export default TopicCard;
