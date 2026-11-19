import type { TopicGroup } from '../types';
import { chats } from './chats';
import { gettingStarted } from './gettingStarted';
import { groupsAndCalls } from './groupsAndCalls';
import { limitsAndRoadmap } from './limits';
import { profile } from './profile';
import { safety } from './safety';
import { security } from './security';
import { stickers } from './stickers';
import { troubleshooting } from './troubleshooting';

export const HELP_GROUPS: TopicGroup[] = [
  gettingStarted,
  chats,
  groupsAndCalls,
  stickers,
  profile,
  safety,
  security,
  limitsAndRoadmap,
  troubleshooting,
];

export const POPULAR_TOPICS = ['create-account', 'forgot-password', 'audio-calls', 'privacy', 'limits', 'not-supported'];
