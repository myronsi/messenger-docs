import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LegalPage from './LegalPage';

const renderPage = (props: Partial<Parameters<typeof LegalPage>[0]> = {}) =>
  render(<LegalPage doc="privacy" lang="en" appUrl="https://messenger.viserix.com/" onLanguageChange={vi.fn()} {...props} />);

describe('LegalPage', () => {
  it('renders the document with its title, sections and tabs to the other documents', () => {
    renderPage();
    expect(screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })).toBeInTheDocument();
    const tabs = screen.getByRole('navigation', { name: 'Legal documents' });
    expect(within(tabs).getByRole('link', { name: 'Terms of Use' })).toHaveAttribute('href', '#/terms/en');
    expect(within(tabs).getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getAllByRole('navigation', { name: 'On this page' })[0]).toHaveTextContent('1. Short summary');
    expect(document.title).toBe('Privacy Policy · Messenger');
  });

  it('switches the language through the language buttons', async () => {
    const onLanguageChange = vi.fn();
    renderPage({ onLanguageChange });
    await userEvent.setup().click(screen.getByRole('button', { name: 'de' }));
    expect(onLanguageChange).toHaveBeenCalledWith('de');
  });

  it('shows translated labels and marks the content language', () => {
    renderPage({ doc: 'terms', lang: 'de' });
    expect(screen.getByRole('link', { name: 'Hilfe' })).toHaveAttribute('href', '#/');
    expect(screen.getByRole('main')).toHaveAttribute('lang', 'de');
    expect(document.documentElement.lang).toBe('de');
  });

  it('shows the imprint without a language switch', () => {
    renderPage({ doc: 'imprint', lang: 'es' });
    expect(screen.getByRole('heading', { level: 1, name: 'Impressum' })).toBeInTheDocument();
    expect(screen.queryByRole('group', { name: 'Idioma' })).not.toBeInTheDocument();
    expect(screen.getByText(/Angaben gemäß § 5 DDG/)).toBeInTheDocument();
  });

  it('opens external links in a new tab', () => {
    renderPage();
    expect(screen.getByRole('link', { name: 'DB-IP' })).toHaveAttribute('target', '_blank');
  });
});
