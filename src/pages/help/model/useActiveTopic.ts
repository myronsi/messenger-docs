import { useEffect, useState } from 'react';

export const useActiveTopic = (ids: string[]): string | null => {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join(' ');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-88px 0px -65% 0px' },
    );
    key.split(' ').forEach((id) => {
      const element = id ? document.getElementById(id) : null;
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
};
