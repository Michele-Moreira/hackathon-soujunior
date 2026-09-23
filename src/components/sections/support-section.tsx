import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'
import { APOIA_SE_URL } from '@/lib/links'

export function SupportSection() {
  const { eyebrow, title, description, supportLabel, tiers } = content.support

  return (
    <PageSection
      id="apoie"
      contentClassName="flex flex-col gap-10 md:grid md:grid-cols-2 md:items-center md:gap-20"
    >
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <SectionChip>{eyebrow}</SectionChip>
        <h2 id="apoie-titulo" className="text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
          {title}
        </h2>
        <p className="max-w-[720px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        <Button asChild variant="light" className="h-10 px-6 text-sm md:h-[68px] md:px-8 md:text-xl">
          <ExternalLink href={APOIA_SE_URL}>
            {supportLabel}
            <ArrowRight aria-hidden="true" className="size-4 md:size-6" />
          </ExternalLink>
        </Button>
      </div>
      <ul className="grid grid-cols-2 gap-4 md:gap-8">
        {tiers.map((tier) => (
          <li
            key={tier.value}
            className="flex flex-col items-center gap-2 rounded-2xl bg-foreground px-5 py-8 text-center md:gap-3 md:px-8 md:py-12"
          >
            <p className="text-[40px]/none font-bold text-accent-strong md:text-[64px]/none">{tier.value}</p>
            <h3 className="font-semibold text-accent-strong md:text-xl">{tier.title}</h3>
            <p className="text-sm text-ink md:text-base/[24px]">{tier.description}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
