import { Archive, Bell, Brush, Inbox, MessageCircle, MessagesSquare, Trash2 } from 'lucide-react';
import type { TopicGroup } from '../types';

export const chats: TopicGroup = {
  id: 'chats-and-messages',
  title: 'Chats and messages',
  summary: 'Chats, requests, messages, drawings and notifications.',
  icon: MessagesSquare,
  topics: [
    {
      id: 'start-chat',
      title: 'Start a chat',
      icon: MessageCircle,
      blocks: [
        {
          kind: 'steps',
          items: [
            'Use the search at the top of the chat list to find a person by username.',
            'Open their profile and press **Message**.',
          ],
        },
        { kind: 'text', text: 'If the person accepts messages only after approval, your first message waits in their requests until they accept it.' },
        { kind: 'text', text: '**Saved Messages** at the top of your chat list is a chat with yourself: a place for notes, links and files.' },
      ],
    },
    {
      id: 'requests',
      title: 'Message requests',
      icon: Inbox,
      blocks: [
        { kind: 'text', text: 'Chats from people you have no chat with yet go to the **Requests** folder instead of your main chat list.' },
        {
          kind: 'list',
          items: [
            'The sender does not see that you read their messages until you accept or reply.',
            '**Accept** moves the chat to your chats.',
            '**Delete** removes the request.',
            '**Report and block** reports the sender and stops them from contacting you.',
          ],
        },
      ],
    },
    {
      id: 'messages',
      title: 'Work with messages',
      icon: MessagesSquare,
      blocks: [
        {
          kind: 'list',
          items: [
            'Attach photos, files and voice messages with the buttons next to the message field.',
            'Right-click a message, or long-press it on a phone, to **reply, edit, copy, forward, react** or **delete** it.',
            'Edit your own messages at any time. Voice messages, stickers and forwarded messages cannot be edited.',
            'Delete a message for yourself only, or for everyone in the chat. In a direct chat, either person can delete any message for both of you.',
            'Double-tap a message to react with your quick emoji. You choose that emoji in [Personalization](#appearance).',
            'Unsent text stays as a draft in each chat while the tab is open.',
            'Use **Search in chat** in the chat header to find older messages.',
          ],
        },
        { kind: 'text', text: 'Size and file-type limits are listed in [Limits](#limits).' },
      ],
    },
    {
      id: 'drawing',
      title: 'Draw on images',
      icon: Brush,
      blocks: [
        { kind: 'text', text: 'You can draw or write on a photo before you send it, or on an image you open in a chat.' },
        {
          kind: 'steps',
          items: [
            'Select a photo to send, or open an image, and press **Draw**.',
            'Use **Pen**, **Text**, **Move** and **Eraser**. Change the color and size as you go.',
            'Press **Done**, or **Send** to send the result.',
          ],
        },
        { kind: 'text', text: 'Undo and Redo work step by step. **Clear drawing** removes everything you added.' },
      ],
    },
    {
      id: 'organize',
      title: 'Organize your chats',
      icon: Archive,
      blocks: [
        {
          kind: 'list',
          items: [
            '**Archive** a chat from its menu in the chat list to hide it. Pull down the chat list, or open **Archived chats**, to see it again.',
            '**Unarchive** moves it back to your chats.',
            'Drag chats to change their order.',
            '**Mute** a chat to stop its alerts without leaving it.',
          ],
        },
      ],
    },
    {
      id: 'delete-chat',
      title: 'Delete or clear a chat',
      icon: Trash2,
      blocks: [
        {
          kind: 'list',
          items: [
            '**Delete chat** removes the chat and its messages from your chat list. Tick **Also delete for** the other person to remove it for them too.',
            '**Clear history** removes all messages but keeps the chat. Tick **Also clear for** the other person, or **Clear for all members** in a group, to clear it for them too.',
          ],
        },
      ],
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      blocks: [
        {
          kind: 'steps',
          items: [
            'Open your profile, then **Notifications**.',
            'Turn message alerts, sound and message previews on or off.',
            'Turn on browser notifications and allow the browser\'s permission prompt to get alerts when Messenger is in the background.',
          ],
        },
        {
          kind: 'text',
          text: 'You can also turn on **Birthday reminders**: a note at 9:00 in your time zone when someone you chat with has a birthday.',
        },
        { kind: 'text', text: 'Not getting alerts? See [Troubleshooting](#troubleshooting).' },
      ],
    },
  ],
};
