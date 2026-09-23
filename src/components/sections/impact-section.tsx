import { MascotImage } from '@/components/layout/mascot-image'
import { PageSection } from '@/components/layout/page-section'
import { Reveal } from '@/components/layout/reveal'
import { RevealGroup } from '@/components/layout/reveal-group'
import { SectionChip } from '@/components/layout/section-chip'
import { StatCard } from '@/components/layout/stat-card'
import content from '@/content/site.json'

export function ImpactSection() {
  const { eyebrow, title, description, communityTitle, communityStats, networkTitle, networkStats } = content.impact

  return (
    <PageSection id="impacto" contentClassName="flex flex-col gap-12 md:gap-16">
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="flex flex-col gap-8">
          <Reveal className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <div className="flex flex-col items-start gap-6">
              <SectionChip>{eyebrow}</SectionChip>
              <h3 className="text-2xl font-semibold md:text-[32px]">{communityTitle}</h3>
            </div>
            <MascotImage name="impacto" className="mx-auto w-[220px] sm:mx-0 sm:w-[240px] lg:w-[280px]" />
          </Reveal>
          <RevealGroup asChild>
            <dl className="grid gap-4 sm:grid-cols-3 md:gap-5">
              {communityStats.map((stat) => (
                <div key={stat.label} data-reveal>
                  <StatCard value={stat.value} label={stat.label} layout="stacked" className="h-full" />
                </div>
              ))}
            </dl>
          </RevealGroup>
        </div>
        <Reveal className="flex flex-col gap-6 lg:pt-4">
          <h2 id="impacto-titulo" className="text-[32px]/[40px] font-medium md:text-[48px]/[60px] xl:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[760px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
        <Reveal asChild>
          <h3 className="text-2xl font-semibold md:text-[32px]">{networkTitle}</h3>
        </Reveal>
        <RevealGroup asChild>
          <dl className="grid gap-4 md:grid-cols-2 md:gap-6">
            {networkStats.map((stat) => (
              <div key={stat.label} data-reveal>
                <StatCard value={stat.value} label={stat.label} className="h-full" />
              </div>
            ))}
          </dl>
        </RevealGroup>
      </div>
    </PageSection>
  )
}
