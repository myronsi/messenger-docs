import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AnniversaryPage from './AnniversaryPage';

describe('AnniversaryPage', () => {
  it('shows the two-years chat in a full-screen frame and names the tab', () => {
    render(<AnniversaryPage page="two-years" />);
    const frame = screen.getByTitle('Messenger Turns Two');
    expect(frame.getAttribute('srcdoc')).toContain('myronsi created the group');
    expect(document.title).toBe('Messenger Turns Two');
  });

  it('shows Wrapped and gives the old tab name back when it closes', () => {
    document.title = 'Messenger Help';
    const { unmount } = render(<AnniversaryPage page="wrapped" />);
    expect(screen.getByTitle('Messenger Wrapped').getAttribute('srcdoc')).toContain('Happy 2nd birthday, messenger');
    expect(document.title).toBe('Messenger Wrapped');
    unmount();
    expect(document.title).toBe('Messenger Help');
  });
});
