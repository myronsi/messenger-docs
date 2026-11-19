import { MessageCircle, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib/utils';

const THEMES = [
  { value: 'light', label: 'Light theme', icon: Sun },
  { value: 'dark', label: 'Dark theme', icon: Moon },
  { value: 'system', label: 'System theme', icon: Monitor },
] as const;

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div role="group" aria-label="Theme" className="grid h-9 grid-cols-3 rounded-md border border-border bg-muted p-1">
      {THEMES.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          title={label}
          aria-label={label}
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={cn(
            'flex w-7 items-center justify-center rounded transition-colors',
            theme === value ? 'bg-background text-foreground shadow-sm' : 'text-subtle-foreground hover:text-foreground',
          )}
        >
          <Icon aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
};

const SiteHeader = ({ appUrl }: { appUrl: string }) => (
  <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
    <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
      <a href="#/" className="flex min-w-0 items-center gap-2.5 font-semibold text-foreground" aria-label="Messenger Help home">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </span>
        <span>Messenger</span>
        <span className="hidden font-normal text-muted-foreground sm:inline">Help</span>
      </a>
      <div className="flex-1" />
      <ThemeSwitch />
      <Button asChild size="sm">
        <a href={appUrl}>Open Messenger</a>
      </Button>
    </div>
  </header>
);

export default SiteHeader;
