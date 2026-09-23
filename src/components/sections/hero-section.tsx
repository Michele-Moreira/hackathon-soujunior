import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { MascotImage } from '@/components/layout/mascot-image'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'
import { APOIA_SE_URL } from '@/lib/links'

export function HeroSection() {
  const { eyebrow, title, description, supportLabel } = content.hero

  return (
    <PageSection
      id="inicio"
      className="pt-4 md:pt-4"
      contentClassName="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12"
    >
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <SectionChip>{eyebrow}</SectionChip>
        <h1 id="inicio-titulo" className="max-w-[760px] text-[40px]/[50px] font-medium md:text-[52px]/[64px] xl:text-[72px]/[88px]">
          {title}
        </h1>
        <p className="max-w-[560px] text-base/[22px] text-foreground/75 md:text-2xl/[35px]">{description}</p>
        <Button asChild variant="light" className="h-10 px-6 text-sm md:h-[68px] md:px-8 md:text-xl">
          <ExternalLink href={APOIA_SE_URL}>
            {supportLabel}
            <ArrowRight aria-hidden="true" className="size-4 md:size-6" />
          </ExternalLink>
        </Button>
      </div>
      <MascotImage name="inicio" isEager className="mx-auto lg:mx-0" />
    </PageSection>
  )
}
