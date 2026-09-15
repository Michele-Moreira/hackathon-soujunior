import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'

const INITIATIVE_SLOTS = ['primeira', 'segunda', 'terceira', 'quarta', 'quinta']

export function WhatWeDoSection() {
  return (
    <PageSection id="atuacao">
      <SectionHeading
        sectionId="atuacao"
        eyebrow="Atuação"
        title="Transformamos aprendizado em experiência prática"
        description="Mentorias, projetos open source e uma comunidade ativa para ganhar experiência de verdade."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {INITIATIVE_SLOTS.map((slot) => (
          <ImagePlaceholder key={slot} className="aspect-3/2" />
        ))}
      </div>
    </PageSection>
  )
}
