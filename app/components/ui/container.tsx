import { cn } from '@/app/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('max-w-7xl mx-auto md:px-4 px-3', className)}>
      {children}
    </div>
  );
}
