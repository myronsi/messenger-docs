import { isExternalHref, parseRichText } from '@/shared/lib/richText';

const RichText = ({ text }: { text: string }) => (
  <>
    {parseRichText(text).map((token, index) => {
      switch (token.type) {
        case 'strong':
          return <strong key={index} className="font-semibold text-foreground">{token.text}</strong>;
        case 'code':
          return <code key={index} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em] text-foreground">{token.text}</code>;
        case 'link':
          return isExternalHref(token.href) ? (
            <a key={index} href={token.href} target="_blank" rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-4 hover:underline">{token.text}</a>
          ) : (
            <a key={index} href={token.href} className="font-medium text-primary underline-offset-4 hover:underline">{token.text}</a>
          );
        default:
          return <span key={index}>{token.text}</span>;
      }
    })}
  </>
);

export default RichText;
