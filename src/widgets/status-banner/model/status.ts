export type AreaState = 'working' | 'slow' | 'down' | 'unknown';

export interface ServiceStatus {
  state: AreaState;
  areas: { name: string; state: AreaState; since?: string }[];
  updated_at: string;
}

export interface Notice {
  tone: 'down' | 'slow';
  text: string;
}

const AREA_LABELS: Record<string, string> = {
  messages: 'messages',
  files: 'sending files',
  search: 'search',
  calls: 'calls',
};

const joinList = (items: string[]) =>
  items.length <= 1 ? (items[0] ?? '') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;

const formatTime = (value: string) =>
  new Date(value).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

export const isServiceStatus = (value: unknown): value is ServiceStatus =>
  typeof value === 'object' && value !== null && Array.isArray((value as ServiceStatus).areas) && typeof (value as ServiceStatus).state === 'string';

export const noticeFor = (status: ServiceStatus | null): Notice | null => {
  if (!status) return null;
  const label = (name: string) => AREA_LABELS[name] ?? name;
  const down = status.areas.filter((area) => area.state === 'down');
  if (down.length > 0) {
    const since = down.map((area) => area.since).filter((value): value is string => Boolean(value)).sort()[0];
    const when = since ? `since ${formatTime(since)}` : 'right now';
    return { tone: 'down', text: `Problems with ${joinList(down.map((area) => label(area.name)))} ${when}. We are working on it.` };
  }
  const slow = status.areas.filter((area) => area.state === 'slow');
  if (slow.length > 0) {
    return { tone: 'slow', text: `Slower than usual right now: ${joinList(slow.map((area) => label(area.name)))}.` };
  }
  return null;
};
