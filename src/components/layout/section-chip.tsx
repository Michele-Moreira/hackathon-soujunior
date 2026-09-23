import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function SectionChip({ children }: Props) {
  return (
    <span className="inline-flex h-[37px] items-center rounded-full bg-primary px-5 text-[13px] font-medium tracking-wide text-primary-foreground uppercase md:h-[46px] md:px-8 md:text-base">
      {children}
    </span>
  )
}
