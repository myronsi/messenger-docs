import { useEffect } from 'react';

const idFromHash = (hash: string): string | null => {
  try {
    return decodeURIComponent(hash.replace(/^#/, '')) || null;
  } catch {
    return null;
  }
};

export const scrollToTarget = (target: HTMLElement) => {
  target.scrollIntoView({ behavior: 'instant', block: 'start' });
  target.focus({ preventScroll: true });
};

const pushHash = (hash: string) => {
  if (window.location.hash === hash) return;
  try {
    window.history.pushState(null, '', hash);
  } catch {
    return;
  }
};

const isPlainClick = (event: MouseEvent) =>
  !event.defaultPrevented && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

export const useInPageLinks = () => {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!isPlainClick(event) || !(event.target instanceof Element)) return;
      const link = event.target.closest('a[href^="#"]:not([href^="#/"])');
      const id = link ? idFromHash(link.getAttribute('href') ?? '') : null;
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      event.preventDefault();
      pushHash(`#${id}`);
      scrollToTarget(target);
    };

    const onPopState = () => {
      const id = idFromHash(window.location.hash);
      const target = id ? document.getElementById(id) : null;
      if (target) scrollToTarget(target);
      else if (!id) window.scrollTo({ top: 0 });
    };

    document.addEventListener('click', onClick);
    window.addEventListener('popstate', onPopState);
    const initial = idFromHash(window.location.hash);
    const initialTarget = initial ? document.getElementById(initial) : null;
    if (initialTarget) scrollToTarget(initialTarget);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);
};
