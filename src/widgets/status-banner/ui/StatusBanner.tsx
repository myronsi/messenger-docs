import { AlertTriangle, Gauge } from 'lucide-react';
import { cn } from '@/shared/lib/utils';
import { noticeFor } from '../model/status';
import { useServiceStatus } from '../model/useServiceStatus';

const StatusBanner = ({ url }: { url: string | null }) => {
  const notice = noticeFor(useServiceStatus(url));

  return (
    <div role="status" aria-live="polite">
      {notice && (
        <div className={cn('border-b px-4 py-2.5 text-sm',
          notice.tone === 'down' ? 'border-destructive/30 bg-destructive-soft text-foreground' : 'border-warning/30 bg-warning-soft text-foreground')}>
          <p className="mx-auto flex max-w-6xl items-start gap-2.5">
            {notice.tone === 'down'
              ? <AlertTriangle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
              : <Gauge aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-warning" />}
            <span>{notice.text}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default StatusBanner;
