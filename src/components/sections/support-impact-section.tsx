import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'

const FUNDING_SLOTS = ['primeiro', 'segundo', 'terceiro', 'quarto']

export function SupportImpactSection() {
  return (
    <PageSection id="financiamento">
      <SectionHeading
        sectionId="financiamento"
        eyebrow="Financiamento"
        title="Da contribuição à continuidade das iniciativas"
        description="Cada contribuição ajuda a manter a estrutura que sustenta a comunidade e os projetos da SouJunior."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {FUNDING_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-square rounded-none border border-background lg:aspect-14/13" />
        ))}
      </div>
    </PageSection>
  )
}
