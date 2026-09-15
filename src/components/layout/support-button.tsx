import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { APOIA_SE_URL } from '@/lib/links'

type Props = {
  children: ReactNode
}

export function SupportButton({ children }: Props) {
  return (
    <Button asChild size="lg">
      <ExternalLink href={APOIA_SE_URL}>
        {children}
        <ArrowRight aria-hidden="true" />
      </ExternalLink>
    </Button>
  )
}
