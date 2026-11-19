import { Sparkles } from 'lucide-react';
import type { Topic } from '../types';

export const comingSoon: Topic = {
  id: 'coming-soon',
  title: 'Coming soon',
  icon: Sparkles,
  blocks: [
    { kind: 'text', text: 'We are working on these. Plans can change, so there are no dates yet.' },
    {
      kind: 'table',
      columns: ['Feature', 'What it will do'],
      rows: [
        ['Search across chats', 'Find messages in all your chats at once, with the matching words highlighted. Today search works inside one chat.'],
        ['Data export', 'Download a copy of your data. Until then you can ask for one by email; see the [Privacy Policy](#/privacy).'],
      ],
    },
  ],
};
