import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  id: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function PageSection({ id, className, contentClassName, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-titulo`}
      className={cn('px-9 py-16 md:px-11 md:py-24', className)}
    >
      <div className={cn('mx-auto w-full max-w-[1636px]', contentClassName)}>{children}</div>
    </section>
  )
}
