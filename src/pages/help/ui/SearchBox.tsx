import type { RefObject } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/shared/ui/input';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  inputRef: RefObject<HTMLInputElement | null>;
}

const SearchBox = ({ value, onChange, onSubmit, inputRef }: SearchBoxProps) => (
  <form role="search" className="relative max-w-xl" onSubmit={(event) => { event.preventDefault(); onSubmit(); }}>
    <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input
      ref={inputRef}
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => { if (event.key === 'Escape') onChange(''); }}
      placeholder="Search the help, e.g. recovery key, mute, sticker"
      aria-label="Search the help"
      autoComplete="off"
      className="h-12 rounded-lg bg-card pl-10 pr-12 text-base shadow-sm md:text-base [&::-webkit-search-cancel-button]:hidden"
    />
    {value ? (
      <button
        type="button"
        onClick={() => { onChange(''); inputRef.current?.focus(); }}
        aria-label="Clear search"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
      >
        <X aria-hidden="true" className="h-4 w-4" />
      </button>
    ) : (
      <kbd aria-hidden="true"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border px-1.5 font-sans text-xs text-muted-foreground sm:block">
        /
      </kbd>
    )}
  </form>
);

export default SearchBox;
