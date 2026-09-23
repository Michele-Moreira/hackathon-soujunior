import { cn } from '@/lib/utils'

type Props = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: Props) {
  return (
    <div className={cn('flex items-center gap-5 rounded-2xl bg-foreground px-6 py-6 md:px-8', className)}>
      <dt className="text-ink md:text-lg/[26px]">{label}</dt>
      <dd className="order-first text-[40px]/none font-bold text-accent-strong md:text-[52px]/none">{value}</dd>
    </div>
  )
}
