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
      <div className="flex flex-col gap-8 xl:grid xl:grid-cols-[436px_minmax(0,1fr)_minmax(0,1fr)] xl:grid-rows-[auto_1fr] xl:gap-x-8 xl:gap-y-6 2xl:gap-x-12">
        <Reveal className="xl:col-start-1 xl:row-start-1">
          <SectionChip>{eyebrow}</SectionChip>
        </Reveal>
        <Reveal className="flex flex-col gap-6 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:self-center">
          <h2 id="impacto-titulo" className="text-[32px]/[40px] font-medium md:text-[48px]/[60px] 2xl:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[760px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        </Reveal>
        <Reveal className="xl:col-start-2 xl:row-span-2 xl:row-start-1 xl:self-center">
          <MascotImage name="impacto" className="mx-auto w-[240px] md:w-[320px] xl:w-full xl:max-w-[519px]" />
        </Reveal>
        <div className="flex flex-col gap-6 xl:col-start-1 xl:row-start-2">
          <Reveal asChild>
            <h3 className="text-2xl font-bold md:text-[32px] xl:text-[40px]/[48px]">{communityTitle}</h3>
          </Reveal>
          <RevealGroup asChild>
            <dl className="grid auto-rows-fr grid-cols-2 gap-4">
              {communityStats.map((stat) => (
                <StatCard key={stat.label} data-reveal value={stat.value} label={stat.label} layout="stacked" />
              ))}
            </dl>
          </RevealGroup>
        </div>
      </div>

      <div className="flex flex-col gap-6 2xl:grid 2xl:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] 2xl:items-center 2xl:gap-12">
        <Reveal asChild>
          <h3 className="text-2xl font-bold md:text-[32px] xl:text-[40px]/[48px]">{networkTitle}</h3>
        </Reveal>
        <RevealGroup asChild>
          <dl className="grid gap-4 md:gap-6 lg:grid-cols-2">
            {networkStats.map((stat) => (
              <StatCard key={stat.label} data-reveal value={stat.value} label={stat.label} className="h-full" />
            ))}
          </dl>
        </RevealGroup>
      </div>
    </PageSection>
  )
}
