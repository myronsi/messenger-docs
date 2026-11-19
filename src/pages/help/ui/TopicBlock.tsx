import { Info, TriangleAlert } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import type { Block, ListItem } from '../model/types';
import RichText from '@/shared/ui/RichText';

const BODY = 'text-[0.9375rem] leading-7 text-subtle-foreground';

const Bullet = ({ item }: { item: ListItem }) => (
  <li className="flex gap-3">
    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
    <div className={cn('min-w-0 flex-1', BODY)}>
      <RichText text={typeof item === 'string' ? item : item.text} />
      {typeof item !== 'string' && (
        <ul className="mt-1 space-y-1">
          {item.items.map((child) => <Bullet key={child} item={child} />)}
        </ul>
      )}
    </div>
  </li>
);

const TopicBlock = ({ block }: { block: Block }) => {
  switch (block.kind) {
    case 'text':
      return <p className={BODY}><RichText text={block.text} /></p>;
    case 'heading':
      return <h4 className="pt-2 text-[0.9375rem] font-semibold text-foreground"><RichText text={block.text} /></h4>;
    case 'steps':
      return (
        <ol className="space-y-3">
          {block.items.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span aria-hidden="true"
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <p className={cn('min-w-0 flex-1', BODY)}><RichText text={step} /></p>
            </li>
          ))}
        </ol>
      );
    case 'list':
      return <ul className="space-y-1.5">{block.items.map((item) => <Bullet key={typeof item === 'string' ? item : item.text} item={item} />)}</ul>;
    case 'note': {
      const Icon = block.tone === 'warning' ? TriangleAlert : Info;
      return (
        <div role="note" className={cn(
          'flex gap-3 rounded-md border px-3 py-2.5 text-[0.9375rem] leading-7 text-foreground',
          block.tone === 'warning' ? 'border-warning/30 bg-warning-soft' : 'border-primary/20 bg-primary/5',
        )}>
          <Icon aria-hidden="true" className={cn('mt-1.5 h-4 w-4 shrink-0', block.tone === 'warning' ? 'text-warning' : 'text-primary')} />
          <p className="min-w-0 flex-1"><RichText text={block.text} /></p>
        </div>
      );
    }
    case 'table':
      return (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60">
              <tr>{block.columns.map((column) => <th key={column} scope="col" className="px-3 py-2 font-semibold text-foreground">{column}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row" className="w-2/5 px-3 py-2 align-top font-medium leading-6 text-foreground sm:w-1/3">{label}</th>
                  <td className="px-3 py-2 leading-6 text-subtle-foreground"><RichText text={value} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
};

export default TopicBlock;
