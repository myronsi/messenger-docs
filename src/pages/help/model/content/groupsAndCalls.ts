import { Phone, PhoneCall, ShieldCheck, Users } from 'lucide-react';
import type { TopicGroup } from '../types';

export const groupsAndCalls: TopicGroup = {
  id: 'groups-and-calls',
  title: 'Groups and calls',
  summary: 'Group chats and end-to-end encrypted audio calls.',
  icon: PhoneCall,
  topics: [
    {
      id: 'groups',
      title: 'Groups',
      icon: Users,
      blocks: [
        {
          kind: 'steps',
          items: ['Open your profile and choose **Create Group**.', 'Add participants and give the group a name.'],
        },
        {
          kind: 'list',
          items: [
            'Owners and admins can rename the group, change its picture, background and description, and add or remove participants.',
            'Open a message\'s read status to see who has read it.',
            'A group can have its own emoji. Members can use them in any chat while they are in the group.',
            'To leave a group you own, first make another participant the owner.',
          ],
        },
      ],
    },
    {
      id: 'audio-calls',
      title: 'Audio calls',
      icon: Phone,
      blocks: [
        { kind: 'text', text: 'You can call a person or a whole group. Calls are end-to-end encrypted.' },
        {
          kind: 'steps',
          items: [
            'Open a chat and press **Start audio call** in the chat header, or press **Call** on a profile.',
            'Allow the microphone when the browser asks.',
            'In a group, others see **Ongoing group call** and can press **Join**.',
          ],
        },
        { kind: 'heading', text: 'During a call' },
        {
          kind: 'list',
          items: [
            '**Mute microphone** turns your microphone off and on.',
            'Pick a different **Microphone** or **Audio output** in the call panel.',
            '**Minimize call** lets you keep chatting while you talk.',
            '**Leave** leaves the call. In a group, **End for everyone** ends it for all.',
          ],
        },
        { kind: 'text', text: 'Already in the call on another device? Messenger offers to **Move here**; the other device then leaves the call.' },
        { kind: 'text', text: 'Choose who can call you in [Privacy settings](#privacy). Missed, declined and finished calls appear in the chat.' },
      ],
    },
    {
      id: 'call-security',
      title: 'Call encryption and security code',
      icon: ShieldCheck,
      blocks: [
        { kind: 'text', text: 'Only the people in the call hold the keys to its audio. The call shows **End-to-end encrypted** once keys are exchanged.' },
        {
          kind: 'steps',
          items: [
            'Press **Show security code** in the call.',
            'Compare the code with everyone in the call, by voice or in person.',
            'If all codes match, press **Mark as verified**.',
          ],
        },
        {
          kind: 'list',
          items: [
            'The code changes whenever someone joins or leaves, and the verified mark is cleared.',
            'If a person\'s security key changed since your last call, Messenger warns you. Compare the code before you talk about anything sensitive.',
          ],
        },
        {
          kind: 'note',
          tone: 'info',
          text: 'Encryption protects what you say. It does not hide who called whom and when, and it cannot protect a device that is already compromised.',
        },
      ],
    },
  ],
};
