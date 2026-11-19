import { toPlainText } from '@/shared/lib/richText';
import type { Block, Topic, TopicGroup } from './types';

const blockStrings = (block: Block): string[] => {
  switch (block.kind) {
    case 'text':
    case 'heading':
    case 'note':
      return [block.text];
    case 'steps':
      return block.items;
    case 'list':
      return block.items.flatMap((item) => (typeof item === 'string' ? [item] : [item.text, ...item.items]));
    case 'table':
      return [...block.columns, ...block.rows.flat()];
  }
};

export const topicStrings = (topic: Topic): string[] => [topic.title, ...topic.blocks.flatMap(blockStrings)];

export const topicText = (topic: Topic): string => topicStrings(topic).map(toPlainText).join(' ').toLowerCase();

export const searchWords = (query: string): string[] => query.trim().toLowerCase().split(/\s+/).filter(Boolean);

export const filterGroups = (groups: TopicGroup[], query: string): TopicGroup[] => {
  const words = searchWords(query);
  if (words.length === 0) return groups;
  return groups
    .map((group) => ({
      ...group,
      topics: group.topics.filter((topic) => {
        const text = topicText(topic);
        return words.every((word) => text.includes(word));
      }),
    }))
    .filter((group) => group.topics.length > 0);
};
