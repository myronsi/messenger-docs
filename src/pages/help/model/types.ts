import type { LucideIcon } from 'lucide-react';

export type ListItem = string | { text: string; items: string[] };

export type Block =
  | { kind: 'text'; text: string }
  | { kind: 'heading'; text: string }
  | { kind: 'steps'; items: string[] }
  | { kind: 'list'; items: ListItem[] }
  | { kind: 'note'; tone: 'info' | 'warning'; text: string }
  | { kind: 'table'; columns: [string, string]; rows: [string, string][] };

export interface Topic {
  id: string;
  title: string;
  icon: LucideIcon;
  blocks: Block[];
}

export interface TopicGroup {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  topics: Topic[];
}
