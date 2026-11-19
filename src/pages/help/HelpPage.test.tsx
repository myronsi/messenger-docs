import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import HelpPage from './HelpPage';
import { HELP_GROUPS } from './model/content/groups';

const topicCount = HELP_GROUPS.reduce((count, group) => count + group.topics.length, 0);
const renderPage = () => render(<HelpPage appUrl="https://staging.messenger.viserix.com/" />);

describe('HelpPage', () => {
  it('shows every topic and links to the app', () => {
    renderPage();
    expect(screen.getAllByRole('article')).toHaveLength(topicCount);
    expect(screen.getAllByRole('link', { name: 'Open Messenger' })[0]).toHaveAttribute('href', 'https://staging.messenger.viserix.com/');
  });

  it('filters topics while typing and clears with Escape', async () => {
    const user = userEvent.setup();
    renderPage();
    const search = screen.getByRole('searchbox', { name: 'Search the help' });

    await user.type(search, 'probation');
    expect(screen.getAllByRole('article').map((article) => article.id)).toEqual(['account-status']);
    expect(screen.getByRole('status')).toHaveTextContent('1 topic found');

    await user.keyboard('{Escape}');
    expect(screen.getAllByRole('article')).toHaveLength(topicCount);
  });

  it('explains when nothing matches', async () => {
    const user = userEvent.setup();
    renderPage();
    await user.type(screen.getByRole('searchbox', { name: 'Search the help' }), 'zebra');
    expect(screen.queryAllByRole('article')).toHaveLength(0);
    expect(screen.getByText('No help topic matches "zebra"')).toBeInTheDocument();
  });

  it('focuses the search when the user presses slash', async () => {
    const user = userEvent.setup();
    renderPage();
    await user.keyboard('/');
    expect(screen.getByRole('searchbox', { name: 'Search the help' })).toHaveFocus();
  });

  it('scrolls to the topic of an in-page link without leaving the page', async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    const user = userEvent.setup();
    renderPage();
    const popular = screen.getByRole('navigation', { name: 'Popular topics' });

    await user.click(within(popular).getByRole('link', { name: 'Audio calls' }));

    const target = document.getElementById('audio-calls');
    await waitFor(() => expect(scrollIntoView.mock.contexts).toContain(target));
    expect(window.location.hash).toBe('#audio-calls');
    expect(target).toHaveFocus();
  });

  it('numbers the steps of a topic', () => {
    renderPage();
    const article = screen.getAllByRole('article').find((element) => element.id === 'create-account');
    expect(article).toBeDefined();
    expect(within(article!).getAllByRole('listitem')).toHaveLength(4);
  });
});
