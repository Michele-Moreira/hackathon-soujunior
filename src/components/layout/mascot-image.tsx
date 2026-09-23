import { MASCOTS, type MascotName } from '@/lib/mascots'
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
      src={`/mascotes/${name}.webp`}
      srcSet={`/mascotes/${name}-mobile.webp ${mobileWidth}w, /mascotes/${name}.webp ${width}w`}
      sizes={`(min-width: 768px) ${width}px, ${mobileWidth}px`}
      width={width}
      height={height}
      alt={alt}
      loading={isEager ? 'eager' : 'lazy'}
      decoding="async"
      className={cn('h-auto max-w-full', className)}
    />
  )
}
