import { Download, LogIn, Rocket, UserPlus } from 'lucide-react';
import type { TopicGroup } from '../types';

export const gettingStarted: TopicGroup = {
  id: 'getting-started',
  title: 'Getting started',
  summary: 'Create an account, sign in and install the app.',
  icon: Rocket,
  topics: [
    {
      id: 'create-account',
      title: 'Create an account',
      icon: UserPlus,
      blocks: [
        { kind: 'text', text: 'You need only a username and a password. No phone number or email address is required.' },
        {
          kind: 'steps',
          items: [
            'Open Messenger and choose **Register**.',
            'Pick a username of 3 to 32 characters. Use letters, digits and underscores. You cannot change it later.',
            'Choose a password of 8 to 128 characters with a lowercase letter, an uppercase letter, a digit and a symbol.',
            'Save the **recovery key** that is shown after registration, then confirm that you saved it.',
          ],
        },
        {
          kind: 'note',
          tone: 'warning',
          text: 'Keep the recovery key somewhere safe and offline, for example in a password manager or on paper. If you forget your password, it is one of the ways back into your account; see [Forgot your password](#forgot-password).',
        },
      ],
    },
    {
      id: 'sign-in',
      title: 'Sign in',
      icon: LogIn,
      blocks: [
        {
          kind: 'text',
          text: 'Sign in with your username and password. If two-factor authentication is on, you also enter a code from your authenticator app or a backup code.',
        },
        { kind: 'heading', text: 'Sign in with a QR code' },
        { kind: 'text', text: 'Use this to sign in on a computer without typing your password, with a phone where you are already signed in.' },
        {
          kind: 'steps',
          items: [
            'On the new device, choose **Sign in with QR code**. A code appears; it expires after a short time.',
            'On your phone, open your profile, then **Security & devices** and **Scan QR code**. You can also point the phone\'s camera app at the code.',
            'Check the device, approximate location and time, then press **Approve**.',
          ],
        },
        {
          kind: 'note',
          tone: 'warning',
          text: 'Only approve when you are signing in yourself right now. Never scan a code that someone sent you: it would sign them in to your account.',
        },
      ],
    },
    {
      id: 'install',
      title: 'Install the app',
      icon: Download,
      blocks: [
        { kind: 'text', text: 'Messenger runs in the browser and can be installed like an app, with its own icon and window.' },
        {
          kind: 'list',
          items: [
            '**Computer or Android:** use the browser\'s **Install app** option.',
            '**iPhone or iPad:** open the site in Safari, tap **Share**, then **Add to Home Screen**.',
          ],
        },
        { kind: 'text', text: 'When a new version is available, Messenger tells you. Press **Reload** to update.' },
      ],
    },
  ],
};
