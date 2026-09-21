import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { StatCard } from '@/components/layout/stat-card'
import content from '@/content/site.json'

export function ImpactSection() {
  const { eyebrow, title, description, stats } = content.impact

  return (
    <PageSection id="impacto" className="md:grid md:grid-cols-5 md:items-center">
      <div className="md:col-span-2">
        <SectionHeading sectionId="impacto" eyebrow={eyebrow} title={title} description={description} />
      </div>
      <dl className="grid grid-cols-2 md:col-span-3">
        {stats.map((stat, index) =>
          stat.value ? (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              className="aspect-6/5 border border-background"
            />
          ) : (
            <ImagePlaceholder key={index} className="aspect-6/5 rounded-none border border-background" />
          ),
        )}
      </dl>
    </PageSection>
  )
}
