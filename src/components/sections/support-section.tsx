import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { SupportButton } from '@/components/layout/support-button'
import content from '@/content/site.json'

const TIER_SLOTS = ['primeiro', 'segundo', 'terceiro', 'quarto']

export function SupportSection() {
  const { eyebrow, title, description, supportLabel } = content.support

  return (
    <PageSection id="apoie" className="md:grid md:grid-cols-2 md:items-center">
      <div className="flex flex-col items-start gap-6">
        <SectionHeading sectionId="apoie" eyebrow={eyebrow} title={title} description={description} />
        <SupportButton>{supportLabel}</SupportButton>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {TIER_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-4/3" />
        ))}
      </div>
    </PageSection>
  )
}
