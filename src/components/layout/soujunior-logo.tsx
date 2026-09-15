import { cn } from '@/lib/utils'

type Props = {
  className?: string
}

export function SouJuniorLogo({ className }: Props) {
  return (
    <span
      role="img"
      aria-label="SouJunior"
      className={cn(
        'block aspect-211/40 h-8 bg-current mask-[url(/brand/soujunior-logo.svg)] mask-contain mask-no-repeat',
        className,
      )}
    />
  )
}
