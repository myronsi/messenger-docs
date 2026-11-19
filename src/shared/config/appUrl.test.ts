import { describe, expect, it } from 'vitest';
import { appUrlFor, PRODUCTION_APP_URL, STAGING_APP_URL } from './appUrl';

describe('appUrlFor', () => {
  it.each([
    ['docs.staging.messenger.viserix.com', STAGING_APP_URL],
    ['staging.example.com', STAGING_APP_URL],
    ['docs.messenger.viserix.com', PRODUCTION_APP_URL],
    ['localhost', PRODUCTION_APP_URL],
    ['notstaging.example.com', PRODUCTION_APP_URL],
  ])('links %s to %s', (hostname, expected) => {
    expect(appUrlFor(hostname)).toBe(expected);
  });
});
