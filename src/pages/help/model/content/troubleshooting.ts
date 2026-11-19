import { LifeBuoy } from 'lucide-react';
import type { TopicGroup } from '../types';

export const troubleshooting: TopicGroup = {
  id: 'help',
  title: 'Help',
  summary: 'Fixes for microphones, audio and notifications.',
  icon: LifeBuoy,
  topics: [
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: LifeBuoy,
      blocks: [
        { kind: 'heading', text: 'The call cannot use my microphone' },
        {
          kind: 'list',
          items: [
            '**Access blocked:** allow the microphone for this site in your browser settings and try again.',
            '**In use by another app:** close that app and try again.',
            '**No microphone found:** connect one and try again.',
          ],
        },
        { kind: 'heading', text: 'I cannot hear the call' },
        {
          kind: 'text',
          text: 'Some browsers pause audio until you interact with the page. Press **Enable audio** in the call. Check the **Audio output** device too.',
        },
        { kind: 'heading', text: 'The browser cannot encrypt calls' },
        { kind: 'text', text: 'Update your browser, or use a current version of Chrome, Edge, Firefox or Safari.' },
        { kind: 'heading', text: 'I do not get notifications' },
        {
          kind: 'list',
          items: [
            'Check that notifications are on in [Notifications](#notifications) and that the chat is not muted.',
            'Check that your browser and operating system allow notifications for Messenger.',
          ],
        },
        { kind: 'heading', text: 'An action says "Not allowed for your account"' },
        { kind: 'text', text: 'Your account status blocks it. See [Account status and appeals](#account-status).' },
        { kind: 'heading', text: 'Messenger looks outdated' },
        { kind: 'text', text: 'When Messenger shows that a new version is available, press **Reload**.' },
      ],
    },
  ],
};
