import { useEffect, useState } from 'react';
import { isServiceStatus, type ServiceStatus } from './status';

const REFRESH_MS = 60_000;

export const useServiceStatus = (url: string | null) => {
  const [status, setStatus] = useState<ServiceStatus | null>(null);

  useEffect(() => {
    if (!url) return undefined;
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(url, { cache: 'no-store', credentials: 'omit' });
        if (!response.ok) return;
        const body: unknown = await response.json();
        if (active && isServiceStatus(body)) setStatus(body);
      } catch {
        return;
      }
    };
    void load();
    const timer = window.setInterval(() => void load(), REFRESH_MS);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, [url]);

  return status;
};
