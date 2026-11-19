import { KeyRound, ShieldHalf, UserX } from 'lucide-react';
import type { TopicGroup } from '../types';

export const security: TopicGroup = {
  id: 'account-security',
  title: 'Account security',
  summary: 'Two-factor authentication, sessions, recovery and deleting your account.',
  icon: KeyRound,
  topics: [
    {
      id: 'protect-account',
      title: 'Protect your account',
      icon: ShieldHalf,
      blocks: [
        { kind: 'text', text: 'Open your profile, then **Security & devices**.' },
        {
          kind: 'list',
          items: [
            'Turn on **two-factor authentication** with an authenticator app. Keep the backup codes separate from your recovery key.',
            'Add a **passkey** to sign in with your fingerprint, face or a security key. Your password keeps working.',
            'Add and verify a **recovery email**. It is only used to send you a reset link and is never shown to others.',
            'Check **Security activity** for recent sign-ins and security changes, and **signed-in sessions** to sign out devices you no longer use.',
            'If you have no recovery key yet, create one while you still know your password.',
          ],
        },
        { kind: 'note', tone: 'warning', text: 'Creating a new recovery key makes the previous one stop working. Save the new key right away.' },
      ],
    },
    {
      id: 'forgot-password',
      title: 'Forgot your password',
      icon: KeyRound,
      blocks: [
        { kind: 'text', text: 'On the sign-in screen, choose **Forgot Password?**. Pick the way that works for you:' },
        {
          kind: 'table',
          columns: ['Way', 'What you do'],
          rows: [
            ['Approve on another device', 'Fastest. Open Messenger where you are still signed in and tap the number shown on the new device.'],
            ['Use my recovery key', 'Enter the 32-character key you saved when you signed up, and a new password.'],
            ['Email me a reset link', 'Only if you added and verified a recovery email. Open the link and set a new password.'],
          ],
        },
        { kind: 'text', text: 'If two-factor authentication is on, you also need your authenticator or a backup code.' },
        { kind: 'text', text: 'After a recovery:' },
        {
          kind: 'list',
          items: [
            'you get a **new recovery key**; save it before you continue, the old one stops working',
            'your other sessions are signed out',
            'for your safety, passkeys and the recovery email are removed',
            'changes to security settings are blocked for 24 hours',
          ],
        },
        {
          kind: 'note',
          tone: 'warning',
          text: 'Nobody can reset your password for you. Keep your recovery key safe and add a recovery email, so you always have a way back.',
        },
      ],
    },
    {
      id: 'delete-account',
      title: 'Delete your account',
      icon: UserX,
      blocks: [
        {
          kind: 'steps',
          items: [
            'Open your profile, then **Security & devices**.',
            'Choose **Delete account** and confirm with your current password.',
          ],
        },
        { kind: 'text', text: 'What happens:' },
        {
          kind: 'list',
          items: [
            'You are signed out on every device.',
            'Your direct chats are deleted for both people.',
            'Groups where you are the only member are deleted. In other groups, the next member takes over.',
            'Your sticker packs are deleted. Your files are removed within about a day.',
          ],
        },
        { kind: 'note', tone: 'warning', text: 'This cannot be undone, and there is no data export yet. Save anything you want to keep first.' },
      ],
    },
  ],
};
