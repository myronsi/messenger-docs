import { useEffect } from 'react';
import type { AnniversaryPageName } from '@/shared/lib/route';
import twoYears from './content/two-years.html?raw';
import wrapped from './content/wrapped.html?raw';

const PAGES: Record<AnniversaryPageName, { title: string; html: string }> = {
  'two-years': { title: 'Messenger Turns Two', html: twoYears },
  wrapped: { title: 'Messenger Wrapped', html: wrapped },
};

const AnniversaryPage = ({ page }: { page: AnniversaryPageName }) => {
  const { title, html } = PAGES[page];

  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return <iframe key={page} title={title} srcDoc={html} className="fixed inset-0 h-full w-full border-0 bg-background" />;
};

export default AnniversaryPage;
