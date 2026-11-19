const LINKS = [
  { href: '#/', label: 'Help' },
  { href: '#/privacy', label: 'Privacy Policy' },
  { href: '#/terms', label: 'Terms of Use' },
  { href: '#/guidelines', label: 'Community Guidelines' },
  { href: '#/imprint', label: 'Imprint' },
];

const SiteFooter = ({ appUrl }: { appUrl: string }) => (
  <footer className="border-t border-border">
    <nav aria-label="Site" className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted-foreground">
      {LINKS.map((link) => <a key={link.href} href={link.href} className="hover:text-foreground">{link.label}</a>)}
      <a href={appUrl} className="hover:text-foreground">Open Messenger</a>
    </nav>
  </footer>
);

export default SiteFooter;
