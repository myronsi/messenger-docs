import { CircleUserRound, Link2, Palette } from 'lucide-react';
import type { TopicGroup } from '../types';

export const profile: TopicGroup = {
  id: 'your-profile',
  title: 'Your profile',
  summary: 'Your profile, connected accounts and how the app looks.',
  icon: CircleUserRound,
  topics: [
    {
      id: 'profile',
      title: 'Edit your profile',
      icon: CircleUserRound,
      blocks: [
        { kind: 'text', text: 'Open your profile from the chat list. There you can change:' },
        {
          kind: 'list',
          items: [
            'your **photo**, **display name** and **bio**',
            '**Pronouns** and your **birthday**, with or without the year',
            '**Profile music**: pick a song and choose up to 30 seconds that play when someone presses Play on your profile',
            'the **background**: a gradient, one or two colors, or your own image, GIF or video of up to 15 seconds',
            'the **language** of the app',
          ],
        },
        { kind: 'text', text: 'You decide who sees your birthday, photo, bio and online status in [Privacy settings](#privacy).' },
      ],
    },
    {
      id: 'connected-accounts',
      title: 'Connected accounts',
      icon: Link2,
      blocks: [
        {
          kind: 'text',
          text: 'Show accounts you own on other services on your profile, for example Bluesky, Mastodon or your own website. Others see only the name and a link.',
        },
        {
          kind: 'steps',
          items: [
            'Open your profile, then **Connected accounts** and **Add an account**.',
            'Enter your handle or domain and press **Next**.',
            'Publish the code you get, as shown below.',
            'Press **Verify**. You can remove the code afterwards.',
          ],
        },
        {
          kind: 'list',
          items: [
            '**Bluesky:** in your profile description',
            '**Mastodon:** in your bio or a profile field',
            '**Website:** as a DNS TXT record, or as a `<meta name="messenger-verification">` tag on the home page',
          ],
        },
        {
          kind: 'text',
          text: 'You can connect up to 15 accounts and drag them into any order. If verification fails, wait a few minutes: changes can take time to appear.',
        },
      ],
    },
    {
      id: 'appearance',
      title: 'Appearance and personalization',
      icon: Palette,
      blocks: [
        { kind: 'text', text: 'Open your profile, then **Appearance**, to change how Messenger looks:' },
        {
          kind: 'list',
          items: [
            'theme: Light, Dark or System',
            'accent color, message text size, message corners and spacing',
            'chat background: Plain, Tint, Gradient, Dots or Grid',
          ],
        },
        {
          kind: 'text',
          text: 'In **Personalization**, choose the emoji for double-tap reactions, or turn double-tap off so that a single tap opens the message menu at once.',
        },
        { kind: 'text', text: 'These settings are saved on the device you are using.' },
      ],
    },
  ],
};
