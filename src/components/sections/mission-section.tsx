import { MascotImage } from '@/components/layout/mascot-image'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'

export function MissionSection() {
  const { eyebrow, title, description, cards } = content.mission

  return (
    <PageSection id="missao" contentClassName="flex flex-col gap-10">
      <SectionChip>{eyebrow}</SectionChip>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-16">
        <MascotImage name="missao" className="mx-auto lg:mx-0" />
        <div className="flex flex-col gap-8">
          <h2 id="missao-titulo" className="text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[860px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
          <ul className="grid gap-6 md:grid-cols-2 md:gap-10">
            {cards.map((card) => (
              <li key={card.title} className="flex flex-col gap-5 rounded-2xl bg-foreground p-7 md:p-9">
                <h3 className="border-b-2 border-accent-strong pb-4 text-2xl font-semibold text-accent-strong md:text-[28px]">
                  {card.title}
                </h3>
                <p className="text-ink md:text-lg/[28px]">{card.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  )
}
