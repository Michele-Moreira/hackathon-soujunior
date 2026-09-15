import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { SupportButton } from '@/components/layout/support-button'

const TIER_SLOTS = ['primeiro', 'segundo', 'terceiro', 'quarto']

export function SupportCtaSection() {
  return (
    <PageSection id="apoie" className="md:grid md:grid-cols-2 md:items-center">
      <div className="flex flex-col items-start gap-6">
        <SectionHeading
          sectionId="apoie"
          eyebrow="Apoie"
          title="Ajude a manter essa iniciativa"
          description="Toda contribuição conta. Escolha um valor abaixo ou defina o seu no Apoia.se."
        />
        <SupportButton>Apoiar pelo Apoia.se</SupportButton>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {TIER_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-4/3" />
        ))}
      </div>
    </PageSection>
  )
}
