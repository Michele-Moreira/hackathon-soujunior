import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function ApoiaSeIcon({ className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'block size-6 bg-current mask-[url(/icons/apoia-se.png)] mask-contain mask-center mask-no-repeat',
        className,
      )}
    />
  )
}
