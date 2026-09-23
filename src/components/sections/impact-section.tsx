import { MascotImage } from '@/components/layout/mascot-image'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import { StatCard } from '@/components/layout/stat-card'
import content from '@/content/site.json'

export function ImpactSection() {
  const { eyebrow, title, description, communityTitle, communityStats, networkTitle, networkStats } = content.impact

  return (
    <PageSection id="impacto" contentClassName="flex flex-col gap-10 lg:gap-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <SectionChip>{eyebrow}</SectionChip>
          <MascotImage name="impacto" className="mx-auto lg:mx-0" />
        </div>
        <div className="flex flex-col gap-6 lg:pt-16">
          <h2 id="impacto-titulo" className="text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[760px] text-sm/[20px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <h3 className="text-2xl font-semibold md:text-[32px]">{communityTitle}</h3>
        <dl className="grid gap-4 md:grid-cols-3 md:gap-8">
          {communityStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)] lg:items-center lg:gap-12">
        <h3 className="text-2xl font-semibold md:text-[32px]">{networkTitle}</h3>
        <dl className="grid gap-4 md:grid-cols-2 md:gap-8">
          {networkStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </dl>
      </div>
    </PageSection>
  )
}
