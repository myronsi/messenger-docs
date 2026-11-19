import { describe, expect, it } from 'vitest';
import { HELP_GROUPS, POPULAR_TOPICS } from './content/groups';
import { linkTargets } from '@/shared/lib/richText';
import { filterGroups, searchWords, topicStrings, topicText } from './search';

const allTopics = HELP_GROUPS.flatMap((group) => group.topics);
const ids = (groups: typeof HELP_GROUPS) => groups.flatMap((group) => group.topics.map((topic) => topic.id));

describe('help content', () => {
  it('uses unique ids for groups and topics', () => {
    const all = [...HELP_GROUPS.map((group) => group.id), ...allTopics.map((topic) => topic.id)];
    expect(new Set(all).size).toBe(all.length);
  });

  it('links only to topics that exist', () => {
    const known = new Set(allTopics.map((topic) => topic.id));
    const targets = allTopics.flatMap((topic) => topicStrings(topic).flatMap(linkTargets));
    expect(targets.length).toBeGreaterThan(0);
    expect(targets.filter((target) => !known.has(target))).toEqual([]);
    expect(POPULAR_TOPICS.filter((target) => !known.has(target))).toEqual([]);
  });
});

describe('filterGroups', () => {
  it('returns every group for an empty query', () => {
    expect(filterGroups(HELP_GROUPS, '   ')).toBe(HELP_GROUPS);
  });

  it('matches words anywhere in a topic, ignoring case and markup', () => {
    expect(ids(filterGroups(HELP_GROUPS, 'SECURITY CODE'))).toContain('call-security');
    expect(ids(filterGroups(HELP_GROUPS, 'pack cover'))).toEqual(['stickers']);
  });

  it('requires every word to match', () => {
    const found = filterGroups(HELP_GROUPS, 'recovery key').flatMap((group) => group.topics);
    expect(found.map((topic) => topic.id)).toEqual(expect.arrayContaining(['create-account', 'forgot-password']));
    expect(found.every((topic) => topicText(topic).includes('recovery') && topicText(topic).includes('key'))).toBe(true);
    expect(filterGroups(HELP_GROUPS, 'recovery zebra')).toEqual([]);
  });

  it('drops groups without a matching topic', () => {
    const result = filterGroups(HELP_GROUPS, 'probation');
    expect(result.map((group) => group.id)).toEqual(['privacy-and-safety']);
  });

  it('splits a query into lowercase words', () => {
    expect(searchWords('  Mute   Chat ')).toEqual(['mute', 'chat']);
  });
});
