import { cn } from '@/lib/utils'

type Props = {
  value: string
  label: string
  className?: string
}

export function StatCard({ value, label, className }: Props) {
  return (
    <div className={cn('flex flex-col-reverse justify-center gap-1 p-6', className)}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-3xl font-bold md:text-4xl">{value}</dd>
    </div>
  )
}
