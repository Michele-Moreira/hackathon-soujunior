import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function ImagePlaceholder({ className }: Props) {
  return <div aria-hidden="true" className={cn('rounded-lg bg-muted', className)} />
}
