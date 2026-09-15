import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { TextPlaceholder } from '@/components/layout/text-placeholder'
import content from '@/content/site.json'

export function MissionSection() {
  const { eyebrow, title, description, cards } = content.mission

  return (
    <PageSection id="missao" className="md:grid md:grid-cols-2 md:items-center">
      <SectionHeading sectionId="missao" eyebrow={eyebrow} title={title} description={description} />
      <ul className="flex flex-col">
        {cards.map((card) => (
          <li key={card.title} className="flex flex-col gap-6 border p-5 not-first:-mt-px first:rounded-t-lg last:rounded-b-lg">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            {card.text ? <p className="text-muted-foreground">{card.text}</p> : <TextPlaceholder />}
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
