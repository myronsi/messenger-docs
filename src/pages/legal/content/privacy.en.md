# Privacy Policy

Version 0.2 (draft) · Last updated: [DATE OF PUBLICATION]

This policy explains which personal data Messenger processes, why, on which legal basis, for how long, and
what rights you have. It applies to the Messenger web app, the installed app and the help site.

## 1. Short summary

- Messenger is a free, non-commercial service run by a private person. There is no advertising, no tracking,
  no analytics and no sale of data.
- We store what is needed to run your account, deliver your messages and keep the service safe.
- **Messages are not end-to-end encrypted.** They are encrypted on their way to the server, but stored on the
  server in a form the operator can technically read. Only **audio calls** are end-to-end encrypted.
- **Messages have no automatic expiry.** They stay until you or other people delete them, as described in
  section 6.
- The server is located in the **USA** (Amazon Web Services, region us-east-1). See section 8.
- You can contact us about your data at any time: myron.ilchenko@gmail.com.

## 2. Who is responsible

Controller under Art. 4 (7) GDPR:

Myron Ilchenko  
Bergstraße 5  
79761 Waldshut-Tiengen  
Germany  
Email: myron.ilchenko@gmail.com

A data protection officer is not required and has not been appointed.

## 3. Data we process, purposes and legal bases

Legal bases refer to Art. 6 (1) GDPR: (b) to provide the service you signed up for under the
[Terms of Use](#/terms), (c) to meet a legal obligation, (f) our legitimate interest. Where we rely on (f), you
can object at any time (section 10).

### 3.1 Your account

| Data | Purpose | Legal basis |
|---|---|---|
| Username, display name, password (stored only as an Argon2id hash) | Create and run your account | (b) |
| Recovery key (stored only as a keyed hash), two-factor secret and passkeys (stored encrypted), backup codes (hashed) | Sign-in and account recovery | (b) |
| Optional recovery email address | Recover your account and warn you about security changes | (b) |

Your username is public inside Messenger and cannot be changed. After you delete your account, the username
becomes available to others.

### 3.2 Your profile and settings

Photo, bio, pronouns, birthday, profile music, profile background, connected accounts (name and link only),
time zone, privacy settings, blocked users, names you give your contacts, notification and chat settings.

Purpose: show your profile to others as you choose in the privacy settings, and apply your settings.
Legal basis: (b). All profile extras are optional. You decide in **Privacy** who can see your photo, bio,
birthday and online status.

### 3.3 Messages, files and calls

| Data | Purpose | Legal basis |
|---|---|---|
| Messages (text, replies, forwards, edits), reactions, read receipts | Deliver and show your conversations | (b) |
| Files, photos, videos, voice messages, stickers, custom emoji, drawings | Deliver and show them | (b) |
| A searchable copy of message text | Search inside a chat | (b) |
| Messages that could not be sent yet (with their text) | Retry delivery | (b) |
| Call records: who called whom, when and for how long | Show call history in the chat | (b) |

Calls: the audio is end-to-end encrypted. The server and our media server forward the encrypted audio but
never hold the key.

Photos are re-encoded and their metadata (such as camera location) is removed. **Original videos and other
files keep their metadata**, which can include a location. Remove it before sending if you do not want to
share it.

### 3.4 Security and abuse protection

| Data | Purpose | Legal basis |
|---|---|---|
| Signed-in sessions: full IP address, browser and device (user agent), approximate location (city, country) | Keep you signed in, show your signed-in devices, detect misuse | (f) security of your account and the service |
| Security log: type of event (for example sign-in, failed sign-in, password change), IP address, user agent, approximate location | Show you your account activity; investigate attacks | (f) |
| Rate limits: hashes of your IP address and of your username | Stop brute-force attacks and spam | (f) |

The approximate location is looked up in an offline database on our server. Your IP address is not sent to
any other service. IP geolocation by [DB-IP](https://db-ip.com), licensed under CC BY 4.0.

Note: if someone else tries to sign in to your account, their IP address appears in your security log.

### 3.5 Notifications

If you turn on notifications, we store a push subscription for your device. Notifications are delivered
through the push service of your browser or operating system (section 7). Message previews are off by default.
If you turn them on, the sender's name and the first 160 characters of the message are part of the
notification. Legal basis: (b).

### 3.6 Link previews

When a message contains a link, our server fetches that page to show a title and picture. The website sees
our server's address, the link and the time, but nothing about you. Previews are cached for 24 hours, preview
pictures for 7 days. Legal basis: (f), a better messaging experience.

### 3.7 Connected accounts

If you connect an account from another service, you sign in there or publish a code there yourself. That
service then processes data under its own privacy policy. We keep only the account name and link, never your
password or tokens. Legal basis: (b).

### 3.8 Reports and moderation

| Data | Purpose | Legal basis |
|---|---|---|
| Reports about accounts that you send or receive: reason, optional note, a snapshot of the reported profile, how the two accounts are connected | Handle reports | (c) Digital Services Act, (f) safety of users |
| Reports about a message or a group: reason, optional note, and a **copy** of the reported message with up to 5 messages before and after it as the reporter sees the chat (sender name and username, text or caption, file names, time); for a group report, the group's name, description and picture | Let a person check the report | (c), (f) |
| Account status, its history, appeals, requests for a review by a person (with your text and your status at that time) | Apply restrictions after reports; review them | (c), (f) |
| Decisions of the moderation team: status, reason and the text shown to you; messages removed with their reason; hidden packs | Act on reports and tell you why | (c), (f) |
| Report outcomes: whether action was taken on a report you made | Tell reporters the result, as the Digital Services Act requires | (c) |
| Reports of illegal content sent by email: name and email address of the sender, the content, where it is, why it is illegal | Handle the report and tell the sender the result | (c) |

The reported person never learns who reported them. A report outcome never says what action was taken.

**Who sees this data.** The operator and the moderators appointed by the operator see it in a separate moderation console on
our server, after signing in with a password and a second factor. Moderators are bound to confidentiality.
They see accounts, reports and the copies attached to message reports, **never your chats**: messages are not
read or scanned for moderation. Every time a moderator opens an account, a list or a report, the console
records who looked at what (section 5). Decisions appear in the app as made by "Messenger moderation", never
with a moderator's name.

Section 9 explains the automatic decisions and how a person reviews them.

### 3.9 Server logs and backups

Server logs record technical data about requests (method, route, status, duration, a request id) and, for
errors, internal ids such as your user id. They do not contain IP addresses or message text. When calls are
enabled, the media server logs call room names, participant ids and IP addresses. Our web server logs each
request with a **shortened** IP address (the last part removed), the time, the address requested, the status and
the browser. Before each update of the service, a backup of the main database is made. Legal basis: (f),
operating and securing the service.

## 4. Data stored on your device

Messenger stores data in your browser so that it works and stays fast:

- A cookie that keeps you signed in (`refresh_token`, HttpOnly, Secure).
- In browser storage: a short-lived access token, your profile, settings (theme, language, appearance),
  recent emoji, drafts and unsent messages, a copy of recent chats and messages for fast start and offline
  use (up to 7 days), cached settings and profiles (up to 30 days), your call encryption key, and downloaded
  files (up to 64 MB).

All of this is strictly necessary to provide the service you request, so no consent is needed
(§ 25 (2) no. 2 TDDDG). We use no tracking cookies. Signing out or clearing your browser data removes it.
Anyone with access to your unlocked device can see this data.

## 5. How long we keep data

| Data | Kept |
|---|---|
| Account, profile, settings | Until you delete them or your account; an account nobody used for 1 year is deleted (section 6) |
| Messages, files, reactions | **No time limit**, until deleted as described in section 6 |
| Messages waiting to be resent | Until sent or discarded |
| Unused uploads | 24 hours |
| Call records | 90 days after the call |
| Signed-in sessions | Until signed out or expired, plus 30 days |
| Security log | 1 year |
| Rate-limit data | 1 minute to 1 hour |
| Reports about accounts | 180 days |
| Reports about messages and groups, with their copies | 6 months, also after the chat or message is deleted |
| Report outcomes | 90 days |
| Account status and history, review requests | As long as your account exists |
| Moderation cases and decisions, email reports of illegal content | 2 years after the decision; open cases stay until decided |
| Moderation access log (which moderator viewed which account) | 2 years |
| Link preview cache | 24 hours (pictures 7 days) |
| Database backups | Until replaced, after 10 later updates of the service |
| Server logs, media server logs | Up to 30 MB per service, then overwritten (usually a few days) |
| Web server logs (shortened IP addresses) | 14 days |

## 6. What deleting does

- **Delete for me**, **clear history for me** and **delete chat for me** hide messages for you only. They
  stay for the other people.
- **Delete for everyone** removes the text and the file of a message. The fact that a message existed, its
  sender, its time and reactions to it stay.
- **Clear history for everyone** and **delete chat for both** remove the messages, reactions and files.
- **Delete account** removes your account, profile, settings, sessions, security log, reports, push
  subscriptions, recovery email, passkeys, connected accounts and your direct chats (for both people).
  Reports you made about messages or groups stay without your name until their 6 months are over.
  **These stay:** messages, reactions and files you sent in groups that still exist (shown as "Deleted
  account"), copies of your messages that others forwarded, custom emoji packs you made (without your name),
  sticker pictures, and call records for up to 90 days.
- **Inactive accounts:** if nobody signs in to or uses an account for 1 year, we delete it exactly like
  **Delete account**. If the account has a confirmed recovery email, we write to it 30 days before; signing in
  before that date keeps the account.
- Deleted data can remain in backups until they are replaced (section 5) and in the database's internal
  cleanup for about 10 days.

## 7. Recipients

We do not sell or rent your data and do not share it for advertising. We use these recipients:

| Recipient | Role | Data |
|---|---|---|
| Amazon Web Services EMEA SARL / Amazon Web Services, Inc. | Hosting (processor under Art. 28 GDPR) | All data on the server |
| Google, Mozilla, Apple, Microsoft | Push services of your browser or operating system | Encrypted notification; with previews: sender name and message start |
| [TO DECIDE: email provider, country] | Sending recovery and security emails (processor) | Your recovery email address and the email |
| Other users | As you choose | What you send and what your privacy settings show |
| Websites linked in messages | Link previews | Our server's address and the link |
| Services you connect your account to | At your request | What that service asks for |
| Authorities | Only where the law requires it | As required |

## 8. Transfers to countries outside the EU

Our server is in the USA (AWS region us-east-1). Push services are mostly in the USA. Transfers rely on the
EU–US Data Privacy Framework where the recipient is certified (Art. 45 GDPR), and otherwise on the EU
standard contractual clauses (Art. 46 (2)(c) GDPR). You can ask us for a copy of the safeguards.

## 9. Automated decisions in moderation

When people report an account, Messenger calculates a score from the reports and changes the account's status
automatically: warned, limited, restricted or suspended. Each level blocks certain actions; the **Account
status** page shows which ones and why. Appeals in the app are handled automatically.

A person on the moderation team checks every automatic **restricted** or **suspended** status and every pack
hidden after reports, and can confirm, lower or lift it. The other levels are reviewed when you ask.

These decisions can affect you significantly. You have the right to ask for a review by a person, to state
your point of view and to contest the decision (Art. 22 (3) GDPR). Use **Request a review by a person** on the **Account
status** page, or write to myron.ilchenko@gmail.com. Details are in the
[Community Guidelines and Moderation](#/guidelines).

## 10. Your rights

You have the right to:

- **access** your data and get a copy (Art. 15),
- **correct** wrong data (Art. 16),
- **erase** your data (Art. 17); you can delete your account yourself in Security & devices,
- **restrict** processing (Art. 18),
- **receive your data** in a machine-readable format (Art. 20),
- **object** to processing based on legitimate interest (Art. 21),
- **complain** to a data protection authority (Art. 77). The authority for us is: Der Landesbeauftragte für
  den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße 20, 70173 Stuttgart,
  Germany.

Messenger has no export button yet. Send requests to myron.ilchenko@gmail.com and include your username. To
protect your account, we may ask you to confirm the request from your signed-in account. We answer within one
month.

## 11. Children

You must be at least 13 years old to use Messenger. If you are under 16, a parent or guardian must agree to
the processing of your data. If we learn that a child under 13 has an account, we delete it. Parents can
contact us at myron.ilchenko@gmail.com.

## 12. Security

Connections to Messenger are encrypted (HTTPS). Passwords are hashed with Argon2id; two-factor secrets and
passkeys are stored encrypted. Audio calls are end-to-end encrypted. Messages and files are not end-to-end
encrypted. No system is perfectly secure; please do not share passwords or other secrets in chats.

## 13. Changes

We update this policy when Messenger changes. The version and date are at the top. We announce important
changes in the app before they take effect.
