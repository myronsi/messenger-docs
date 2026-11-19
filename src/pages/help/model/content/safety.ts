import { Flag, Lock, Scale, Shield } from 'lucide-react';
import type { TopicGroup } from '../types';

export const safety: TopicGroup = {
  id: 'privacy-and-safety',
  title: 'Privacy and safety',
  summary: 'Decide who reaches you, block, report and appeal.',
  icon: Shield,
  topics: [
    {
      id: 'privacy',
      title: 'Privacy settings',
      icon: Lock,
      blocks: [
        { kind: 'text', text: 'Open your profile, then **Privacy**. For each item, choose who it applies to:' },
        {
          kind: 'list',
          items: [
            'who can message you, call you and add you to groups',
            'who can see your photo, bio, birthday and online status',
            'who can find you in search',
          ],
        },
        { kind: 'text', text: 'If you limit who can message you, people outside that group land in your [Requests](#requests).' },
        { kind: 'text', text: 'What data Messenger keeps and why is explained in the [Privacy Policy](#/privacy).' },
      ],
    },
    {
      id: 'block-report',
      title: 'Block and report',
      icon: Flag,
      blocks: [
        { kind: 'heading', text: 'Block' },
        { kind: 'text', text: 'Open the person\'s profile and choose **Block**. Blocked users cannot message you or add you to groups.' },
        { kind: 'heading', text: 'Report' },
        {
          kind: 'steps',
          items: [
            'Open the person\'s profile and choose **Report**.',
            'Pick what is wrong: spam, scam or fraud, harassment, pretending to be someone else, an inappropriate name, picture or bio, or something else.',
            'Add details if you like (up to 500 characters). Tick **Also block** to block them at the same time.',
            'Press **Send report**.',
          ],
        },
        { kind: 'text', text: 'The person does not learn who reported them. You can also report sticker and emoji packs from the pack\'s menu.' },
        { kind: 'text', text: 'What is not allowed, and how to report illegal content by email, is in the [Community Guidelines](#/guidelines).' },
      ],
    },
    {
      id: 'account-status',
      title: 'Account status and appeals',
      icon: Scale,
      blocks: [
        {
          kind: 'text',
          text: 'Reports from other people change an account\'s status automatically. See yours in your profile under **Account status**.',
        },
        {
          kind: 'table',
          columns: ['Status', 'What it means'],
          rows: [
            ['Good standing', 'No restrictions.'],
            ['Warned', 'Several people reported the account. Nothing is restricted yet, but more reports will limit it.'],
            ['Limited', 'You can start chats, calls and group invites only with your contacts, and at most 5 new chats a day.'],
            ['Restricted', 'Other people can no longer find you in search, and more actions are blocked.'],
            ['Suspended', 'The account is read-only. You can still read your chats, delete your account and appeal.'],
          ],
        },
        { kind: 'text', text: 'The status page lists exactly what is restricted for you. You can also ask for a review by a person; see [Community Guidelines and Moderation](#/guidelines).' },
        { kind: 'heading', text: 'Appeal' },
        {
          kind: 'list',
          items: [
            'An appeal lowers your status by one level for a 14-day probation.',
            'Without a new report in that time, the lower level stays.',
            'A new report ends the probation, restores the previous status and blocks appeals for 90 days.',
            'You can appeal once every 30 days.',
          ],
        },
      ],
    },
  ],
};
