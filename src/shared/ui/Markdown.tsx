import { Fragment } from 'react';
import type { MarkdownBlock } from '@/shared/lib/markdown';
import RichText from './RichText';

const HEADING_CLASS = {
  1: 'text-3xl font-semibold tracking-tight text-foreground sm:text-4xl',
  2: 'scroll-mt-20 border-t border-border pt-8 text-xl font-semibold text-foreground',
  3: 'scroll-mt-20 pt-2 text-base font-semibold text-foreground',
  4: 'scroll-mt-20 text-[0.9375rem] font-semibold text-foreground',
} as const;

const BODY = 'text-[0.9375rem] leading-7 text-subtle-foreground';

const MarkdownBlockView = ({ block }: { block: MarkdownBlock }) => {
  switch (block.kind) {
    case 'heading': {
      const Tag = `h${block.level}` as 'h1' | 'h2' | 'h3' | 'h4';
      return <Tag id={block.id} className={HEADING_CLASS[block.level]}><RichText text={block.text} /></Tag>;
    }
    case 'paragraph':
      return (
        <p className={BODY}>
          {block.lines.map((line, index) => (
            <Fragment key={index}>
              {index > 0 && <br />}
              <RichText text={line} />
            </Fragment>
          ))}
        </p>
      );
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul';
      return (
        <Tag className={`${BODY} space-y-1.5 pl-6 ${block.ordered ? 'list-decimal' : 'list-disc'} marker:text-muted-foreground`}>
          {block.items.map((item, index) => <li key={index} className="pl-1"><RichText text={item} /></li>)}
        </Tag>
      );
    }
    case 'table':
      return (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/60">
              <tr>{block.head.map((cell, index) => <th key={index} scope="col" className="px-3 py-2 font-semibold text-foreground"><RichText text={cell} /></th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, index) => (
                    <td key={index} className={`px-3 py-2 align-top leading-6 ${index === 0 ? 'font-medium text-foreground' : 'text-subtle-foreground'}`}>
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'rule':
      return <hr className="border-border" />;
  }
};

const Markdown = ({ blocks }: { blocks: MarkdownBlock[] }) => (
  <div className="space-y-4">
    {blocks.map((block, index) => <MarkdownBlockView key={index} block={block} />)}
  </div>
);

export default Markdown;
