import { describe, expect, it } from 'vitest';
import { statusUrlFor, PRODUCTION_STATUS_URL, STAGING_STATUS_URL } from '@/shared/config/appUrl';
import { isServiceStatus, noticeFor, type ServiceStatus } from './status';

const status = (areas: ServiceStatus['areas']): ServiceStatus => ({ state: 'working', areas, updated_at: '2026-11-19T12:00:00Z' });

describe('noticeFor', () => {
  it('shows nothing while everything works or nothing is known', () => {
    expect(noticeFor(null)).toBeNull();
    expect(noticeFor(status([{ name: 'messages', state: 'working' }, { name: 'calls', state: 'unknown' }]))).toBeNull();
  });

  it('names every area that is down, with the earliest start', () => {
    const notice = noticeFor(status([
      { name: 'messages', state: 'down', since: '2026-11-19T12:30:00Z' },
      { name: 'calls', state: 'down', since: '2026-11-19T12:05:00Z' },
      { name: 'search', state: 'slow' },
    ]));
    expect(notice?.tone).toBe('down');
    expect(notice?.text).toMatch(/^Problems with messages and calls since .+\. We are working on it\.$/);
    expect(notice?.text).toContain(new Date('2026-11-19T12:05:00Z').toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }));
  });

  it('says "right now" when the start is unknown', () => {
    expect(noticeFor(status([{ name: 'files', state: 'down' }]))?.text).toBe('Problems with sending files right now. We are working on it.');
  });

  it('reports slow areas when nothing is down', () => {
    expect(noticeFor(status([{ name: 'search', state: 'slow' }, { name: 'messages', state: 'slow' }, { name: 'calls', state: 'slow' }])))
      .toEqual({ tone: 'slow', text: 'Slower than usual right now: search, messages and calls.' });
  });
});

describe('status helpers', () => {
  it('accepts only status-shaped answers', () => {
    expect(isServiceStatus({ state: 'working', areas: [], updated_at: '' })).toBe(true);
    expect(isServiceStatus({ error: 'unavailable' })).toBe(false);
    expect(isServiceStatus(null)).toBe(false);
  });

  it('reads the status of the same environment', () => {
    expect(statusUrlFor('docs.staging.messenger.viserix.com')).toBe(STAGING_STATUS_URL);
    expect(statusUrlFor('docs.messenger.viserix.com')).toBe(PRODUCTION_STATUS_URL);
  });
});
