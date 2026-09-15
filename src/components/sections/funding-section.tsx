import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import content from '@/content/site.json'

const FUNDING_SLOTS = ['primeiro', 'segundo', 'terceiro', 'quarto']

export function FundingSection() {
  const { eyebrow, title, description } = content.funding

  return (
    <PageSection id="financiamento">
      <SectionHeading sectionId="financiamento" eyebrow={eyebrow} title={title} description={description} />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {FUNDING_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-square rounded-none border border-background lg:aspect-14/13" />
        ))}
      </div>
    </PageSection>
  )
}
