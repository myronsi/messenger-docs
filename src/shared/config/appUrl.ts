export const PRODUCTION_APP_URL = 'https://messenger.viserix.com/';
export const STAGING_APP_URL = 'https://staging.messenger.viserix.com/';

export const appUrlFor = (hostname: string): string => (/(^|\.)staging\./.test(hostname) ? STAGING_APP_URL : PRODUCTION_APP_URL);

export const PRODUCTION_STATUS_URL = 'https://moderation.messenger.viserix.com/status.json';
export const STAGING_STATUS_URL = 'https://moderation.staging.messenger.viserix.com/status.json';

export const statusUrlFor = (hostname: string): string => (/(^|\.)staging\./.test(hostname) ? STAGING_STATUS_URL : PRODUCTION_STATUS_URL);
