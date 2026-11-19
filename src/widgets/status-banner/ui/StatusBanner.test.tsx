import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import StatusBanner from './StatusBanner';

const answer = (body: unknown, status = 200) =>
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response(JSON.stringify(body), { status }))));

describe('StatusBanner', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('shows a banner when an area is down', async () => {
    answer({ state: 'down', areas: [{ name: 'calls', state: 'down' }], updated_at: '' });
    render(<StatusBanner url="https://status.example/status.json" />);
    expect(await screen.findByText('Problems with calls right now. We are working on it.')).toBeInTheDocument();
  });

  it('stays empty when everything works', async () => {
    const fetchMock = vi.fn(() => Promise.resolve(new Response(JSON.stringify({ state: 'working', areas: [{ name: 'messages', state: 'working' }], updated_at: '' }))));
    vi.stubGlobal('fetch', fetchMock);
    render(<StatusBanner url="https://status.example/status.json" />);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledOnce());
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('stays empty when the status cannot be read', async () => {
    const fetchMock = vi.fn(() => Promise.reject(new Error('offline')));
    vi.stubGlobal('fetch', fetchMock);
    render(<StatusBanner url="https://status.example/status.json" />);
    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });

  it('ignores answers that are not a status', async () => {
    answer({ error: 'unavailable' }, 503);
    render(<StatusBanner url="https://status.example/status.json" />);
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
  });
});
