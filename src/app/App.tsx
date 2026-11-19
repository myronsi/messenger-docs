import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { HelpPage } from '@/pages/help';
import { LegalPage, preferredLanguage, saveLanguage } from '@/pages/legal';
import { appUrlFor, statusUrlFor } from '@/shared/config/appUrl';
import { routeHref, useRoute, type Language } from '@/shared/lib/route';
import { StatusBanner } from '@/widgets/status-banner';

const App = () => {
  const { route, go } = useRoute();
  const [savedLanguage, setSavedLanguage] = useState<Language>(preferredLanguage);
  const appUrl = appUrlFor(window.location.hostname);

  const changeLanguage = (lang: Language) => {
    saveLanguage(lang);
    setSavedLanguage(lang);
    if (route.page === 'legal') go(routeHref(route.doc, lang), true);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <StatusBanner url={statusUrlFor(window.location.hostname)} />
      {route.page === 'legal' ? (
        <LegalPage key={route.doc} doc={route.doc} lang={route.lang ?? savedLanguage} appUrl={appUrl} onLanguageChange={changeLanguage} />
      ) : (
        <HelpPage appUrl={appUrl} />
      )}
    </ThemeProvider>
  );
};

export default App;
