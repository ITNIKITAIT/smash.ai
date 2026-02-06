import Link from 'next/link';
import { cn } from '@/app/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex items-center font-bold text-xl tracking-tighter',
        className,
      )}>
      <img
        src="/icons/logo.svg"
        alt="SMASH.AI"
        width={32}
        height={32}
        className="mr-2"
      />
      SMASH<span className="text-primary px-1">.</span>AI
    </Link>
  );
}
