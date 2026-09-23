import { MASCOTS, MASCOT_DESKTOP_QUERY, mascotSrc, type MascotName } from '@/lib/mascots'
import { cn } from '@/lib/utils'

type Props = {
  name: MascotName
  className?: string
  isEager?: boolean
}

export function MascotImage({ name, className, isEager = false }: Props) {
  const { width, height, mobileWidth, alt } = MASCOTS[name]

  return (
    <img
      src={mascotSrc(name, false)}
      srcSet={`${mascotSrc(name, true)} ${mobileWidth}w, ${mascotSrc(name, false)} ${width}w`}
      sizes={`${MASCOT_DESKTOP_QUERY} ${width}px, ${mobileWidth}px`}
      width={width}
      height={height}
      alt={alt}
      loading={isEager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('h-auto max-w-full', className)}
    />
  )
}
