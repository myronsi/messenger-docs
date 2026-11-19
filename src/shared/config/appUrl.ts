export const PRODUCTION_APP_URL = 'https://messenger.viserix.com/';
export const STAGING_APP_URL = 'https://staging.messenger.viserix.com/';

export const appUrlFor = (hostname: string): string => (/(^|\.)staging\./.test(hostname) ? STAGING_APP_URL : PRODUCTION_APP_URL);
