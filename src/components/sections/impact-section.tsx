import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'

const IMPACT_SLOTS = ['primeiro', 'segundo', 'terceiro', 'quarto']

export function ImpactSection() {
  return (
    <PageSection id="impacto" className="md:grid md:grid-cols-5 md:items-center">
      <div className="md:col-span-2">
        <SectionHeading
          sectionId="impacto"
          eyebrow="Impacto"
          title="Uma rede em constante movimento"
          description="Os números que mostram a força da comunidade."
        />
      </div>
      <div className="grid grid-cols-2 md:col-span-3">
        {IMPACT_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-6/5 rounded-none border border-background" />
        ))}
      </div>
    </PageSection>
  )
}
