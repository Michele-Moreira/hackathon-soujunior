import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type Props = ComponentProps<'div'> & {
  value: string
  label: string
  layout?: 'inline' | 'stacked'
}

export function StatCard({ value, label, layout = 'inline', className, ...props }: Props) {
  const isStacked = layout === 'stacked'

  return (
    <div
      {...props}
      className={cn(
        'flex rounded-lg bg-foreground shadow-[0_4px_4px] shadow-black/25',
        isStacked
          ? 'flex-col items-center justify-center gap-2 p-4 text-center'
          : 'items-center gap-5 px-6 py-6 md:px-8 xl:min-h-42',
        className,
      )}
    >
      <dt className={cn('text-ink', isStacked ? 'text-sm/5 md:text-lg/6' : 'md:text-lg/[26px] xl:text-2xl')}>
        {label}
      </dt>
      <dd className="order-first text-[40px]/none font-bold text-accent-strong md:text-[55px]/none">{value}</dd>
    </div>
  )
}
