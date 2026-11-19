import { Ban, Gauge } from 'lucide-react';
import type { Topic, TopicGroup } from '../types';
import { comingSoon } from './roadmap';

const LIMIT = ['Item', 'Limit'] as [string, string];

const limits: Topic = {
  id: 'limits',
  title: 'Limits',
  icon: Gauge,
  blocks: [
    { kind: 'text', text: 'These are the limits of the current version. They can change as Messenger grows.' },
    { kind: 'heading', text: 'Messages' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Message length', 'Up to 4,096 characters.'],
        ['Editing', 'Your own text messages and file captions, at any time. Voice messages, stickers and forwarded messages cannot be edited.'],
        ['Delete for everyone', 'At any time. In a direct chat, either person can delete any message for both. In a group: the sender, the owner, admins and moderators.'],
        ['Several messages at once', 'Delete up to 100 messages. Forward up to 20 messages to up to 20 chats.'],
        ['Pinned chats', 'Up to 10.'],
        ['Message history', 'Kept until someone deletes the messages or clears the chat.'],
      ],
    },
    { kind: 'heading', text: 'Files and media' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Photos', 'Up to 20 MB, at most 16,384 pixels per side and 40 megapixels.'],
        ['Videos', 'Up to 100 MB. Videos are optimized to 720p.'],
        ['Voice messages and audio', 'Up to 25 MB and 1 hour.'],
        ['Other files', 'Up to 100 MB.'],
        ['Albums', '2 to 10 photos and videos in one message. Other files are sent as separate messages.'],
        [
          'File types',
          'Photos, videos, audio, PDF, Word, Excel, PowerPoint, RTF, text, Markdown, CSV, JSON, ZIP, 7z, RAR, TAR, GZ and some code files (JS, TS, Python, Java, C++, HTML, CSS).',
        ],
        ['Drawings', 'Up to 200 strokes on one image.'],
      ],
    },
    { kind: 'heading', text: 'Groups and calls' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Group name', 'Up to 64 characters.'],
        ['Group description', 'Up to 500 characters.'],
        ['New group', 'Up to 200 people when you create it.'],
        ['People in a call', 'Up to 10.'],
        ['Ringing', '30 seconds, then the call counts as missed.'],
        ['Call length', 'A call ends automatically after 24 hours. An empty group call ends after 20 seconds.'],
      ],
    },
    { kind: 'heading', text: 'Account and profile' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Username', '3 to 32 letters, digits and underscores. It cannot be changed later.'],
        ['Display name', '3 to 50 characters.'],
        ['Password', '8 to 128 characters with a lowercase letter, an uppercase letter, a digit and a symbol.'],
        ['Bio and pronouns', 'Bio up to 500 characters, pronouns up to 40.'],
        ['Signed-in devices', 'No limit. A device you do not use for 30, 90, 180 or 365 days is signed out; you choose the period in **Security & devices**.'],
        ['Open tabs', 'Up to 10 tabs and devices connected at the same time.'],
        ['Profile music', 'Up to 30 seconds, cut from a song of up to 20 MB.'],
        ['Profile background', 'An image up to 10 MB, or a video or GIF up to 15 MB and 15 seconds.'],
        ['Connected accounts', 'Up to 15. A verification code is valid for 1 hour.'],
      ],
    },
    { kind: 'heading', text: 'Stickers and emoji' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Sticker packs', 'Up to 50 packs with up to 120 stickers each.'],
        ['Sticker pictures', 'PNG, JPEG or WebP up to 5 MB, shown at 512 × 512 pixels.'],
        ['Custom emoji', 'PNG, JPEG, WebP or GIF up to 8 MB, shown at 128 pixels.'],
        ['Emoji per pack', 'Up to 200, or 50 in a group pack.'],
      ],
    },
    { kind: 'heading', text: 'Speed limits' },
    { kind: 'text', text: 'These stop spam. If you reach one, wait a moment and try again.' },
    {
      kind: 'table',
      columns: LIMIT,
      rows: [
        ['Sending messages', 'About 3 per second.'],
        ['Forwarding', '30 per minute.'],
        ['New chats', '60 per hour.'],
        ['New groups', '20 per hour.'],
        ['Starting calls', '10 per minute.'],
        ['Reports', '20 per day.'],
      ],
    },
  ],
};

const notYet: Topic = {
  id: 'not-supported',
  title: 'What Messenger cannot do yet',
  icon: Ban,
  blocks: [
    {
      kind: 'note',
      tone: 'warning',
      text: '**Messages are not end-to-end encrypted.** Only audio calls are. Keep this in mind before you share passwords or other secrets in a chat.',
    },
    {
      kind: 'list',
      items: [
        '**No video calls or screen sharing.** Calls are audio only.',
        '**No calls in the Android and iOS apps.** Calls work in the browser and in the app installed from the browser.',
        '**No disappearing messages.** Messages stay until someone deletes them.',
        '**No search across all chats.** Search works inside one chat for now. See [Coming soon](#coming-soon).',
        '**No username changes.** Pick your username carefully when you register.',
        '**No data export.** You cannot download a copy of your chats yet, but you can ask for one by email; see the [Privacy Policy](#/privacy).',
        '**One account at a time.** To use another account, sign out first.',
        '**No phone numbers.** People find you by username only.',
      ],
    },
  ],
};

export const limitsAndRoadmap: TopicGroup = {
  id: 'limits-and-roadmap',
  title: 'Limits and what is next',
  summary: 'What Messenger can and cannot do today, and what is coming.',
  icon: Gauge,
  topics: [limits, notYet, comingSoon],
};
