import { cn } from '@/lib/utils'

type Props = {
  path: string
  className?: string
}

export function BrandIcon({ path, className }: Props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={cn('size-6', className)}>
      <path d={path} />
    </svg>
  )
}
