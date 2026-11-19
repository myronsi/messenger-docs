import { Smile, Sticker } from 'lucide-react';
import type { TopicGroup } from '../types';

export const stickers: TopicGroup = {
  id: 'stickers-and-emoji',
  title: 'Stickers and emoji',
  summary: 'Make sticker packs and your own emoji.',
  icon: Sticker,
  topics: [
    {
      id: 'stickers',
      title: 'Sticker packs',
      icon: Sticker,
      blocks: [
        { kind: 'heading', text: 'Make a sticker' },
        {
          kind: 'steps',
          items: [
            'Right-click an image in a chat, or long-press it on a phone, and choose **Make sticker**. You can also open **My sticker packs** in the sticker tab next to the message field.',
            'Crop and zoom the picture. Add text or a drawing if you like.',
            'Pick the emoji the sticker stands for, choose a pack and press **Save sticker**.',
          ],
        },
        { kind: 'heading', text: 'Manage packs' },
        {
          kind: 'list',
          items: [
            'Tap a sticker in a pack to edit it, and drag to change the order. **Make cover** sets the pack\'s picture.',
            '**Copy link** to share a pack. Anyone with the link can see and add its stickers.',
            'Deleting a pack does not remove stickers that were already sent.',
            'You can have up to 50 packs, each with up to 120 stickers.',
          ],
        },
        { kind: 'text', text: 'A pack that receives reports may be hidden. Then only its owner can see it.' },
      ],
    },
    {
      id: 'custom-emoji',
      title: 'Custom emoji',
      icon: Smile,
      blocks: [
        {
          kind: 'steps',
          items: [
            'Open the emoji picker and choose **Manage custom emoji**, then **Create pack**.',
            'Press **Add emoji**, choose an image and give it a shortcode.',
            'Use it in any message or as a reaction, or type `:shortcode:`.',
          ],
        },
        {
          kind: 'list',
          items: [
            'Images: PNG, JPEG, WebP or GIF up to 8 MB. They are scaled to 128 px.',
            'Shortcodes: 2 to 32 lowercase letters, digits or underscores.',
            'Share a pack with **Copy link**. Others add it with **Add to my emoji**.',
            'If a pack is deleted, emoji already sent show as `:shortcode:` text.',
          ],
        },
      ],
    },
  ],
};
