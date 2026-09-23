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
        'flex rounded-2xl bg-foreground',
        isStacked
          ? 'flex-col items-center gap-2 px-5 py-9 text-center md:py-12'
          : 'items-center gap-5 px-6 py-6 md:px-8',
        className,
      )}
    >
      <dt className={cn('text-ink', isStacked ? 'text-sm/[20px] md:text-base/[24px]' : 'md:text-lg/[26px]')}>
        {label}
      </dt>
      <dd
        className={cn(
          'order-first font-bold text-accent-strong',
          isStacked ? 'text-[36px]/none md:text-[44px]/none' : 'text-[40px]/none md:text-[52px]/none',
        )}
      >
        {value}
      </dd>
    </div>
  )
}
