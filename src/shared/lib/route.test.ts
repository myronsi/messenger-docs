import { describe, expect, it } from 'vitest';
import { parseRoute, routeHref } from './route';

describe('parseRoute', () => {
  it.each([
    ['', { page: 'help' }],
    ['#audio-calls', { page: 'help' }],
    ['#/', { page: 'help' }],
    ['#/unknown', { page: 'help' }],
    ['#/privacy', { page: 'legal', doc: 'privacy', lang: null }],
    ['#/terms/de', { page: 'legal', doc: 'terms', lang: 'de' }],
    ['#/guidelines/xx', { page: 'legal', doc: 'guidelines', lang: null }],
    ['#/imprint', { page: 'legal', doc: 'imprint', lang: null }],
  ])('reads %s', (hash, expected) => {
    expect(parseRoute(hash)).toEqual(expected);
  });

  it('builds links with and without a language', () => {
    expect(routeHref('privacy')).toBe('#/privacy');
    expect(routeHref('terms', 'ru')).toBe('#/terms/ru');
  });
});
