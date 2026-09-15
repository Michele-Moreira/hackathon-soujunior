import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { TextPlaceholder } from '@/components/layout/text-placeholder'

const PURPOSE_CARDS = ['Missão', 'Visão']

export function MissionSection() {
  return (
    <PageSection id="missao" className="md:grid md:grid-cols-2 md:items-center">
      <SectionHeading
        sectionId="missao"
        eyebrow="Nossa missão"
        title="Criamos oportunidades para novos talentos em tecnologia"
        description="Uma comunidade que abre portas para quem está começando na área."
      />
      <ul className="flex flex-col">
        {PURPOSE_CARDS.map((title) => (
          <li key={title} className="flex flex-col gap-6 border p-5 not-first:-mt-px first:rounded-t-lg last:rounded-b-lg">
            <h3 className="text-xl font-semibold">{title}</h3>
            <TextPlaceholder />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
