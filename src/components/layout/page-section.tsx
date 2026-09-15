import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  id: string
  className?: string
  children: ReactNode
}

export function PageSection({ id, className, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 px-4 py-16 md:px-8 md:py-24">
      <div className={cn('mx-auto flex max-w-6xl flex-col gap-10', className)}>{children}</div>
    </section>
  )
}
