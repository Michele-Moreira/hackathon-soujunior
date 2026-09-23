import type { ReactNode } from 'react'
import { Slot } from 'radix-ui'
import { useReveal } from '@/hooks/use-reveal'

type Props = {
  asChild?: boolean
  className?: string
  children: ReactNode
}

export function Reveal({ asChild = false, className, children }: Props) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()
  const Component = asChild ? Slot.Root : 'div'

  return (
    <Component ref={ref} data-reveal data-visible={isVisible || undefined} className={className}>
      {children}
    </Component>
  )
}
