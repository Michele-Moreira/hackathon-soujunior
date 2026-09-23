import { ContentIcon } from '@/components/layout/content-icon'
import { MascotImage } from '@/components/layout/mascot-image'
import { Reveal } from '@/components/layout/reveal'
import { RevealGroup } from '@/components/layout/reveal-group'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'

export function FundingSection() {
  const { eyebrow, title, description, cards, destinations } = content.funding

  return (
    <section id="financiamento" aria-labelledby="financiamento-titulo">
      <div className="px-9 py-16 md:px-11 md:py-24">
        <Reveal className="mx-auto flex w-full max-w-[1636px] flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <SectionChip>{eyebrow}</SectionChip>
            <h2 id="financiamento-titulo" className="text-[32px]/[40px] font-medium md:text-[48px]/[60px] xl:text-[64px]/[81px]">
              {title}
            </h2>
            <p className="max-w-[760px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
          </div>
          <MascotImage name="financiamento" className="mx-auto lg:mx-0" />
        </Reveal>
      </div>

      <div className="bg-band px-9 py-14 md:px-11 md:py-16">
        <div className="mx-auto w-full max-w-[1636px]">
          <RevealGroup asChild>
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 md:gap-8">
              {cards.map((card) => (
                <li key={card.title} data-reveal className="flex flex-col gap-4 rounded-lg bg-foreground p-6 shadow-[0_4px_2px] shadow-black/25 md:p-7">
                  <h3 className="flex items-center gap-3 text-lg font-semibold text-accent-strong">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-strong text-primary-foreground">
                      <ContentIcon name={card.icon} className="size-5" />
                    </span>
                    {card.title}
                  </h3>
                  <p className="text-ink">{card.description}</p>
                </li>
              ))}
            </ul>
          </RevealGroup>
          <RevealGroup asChild>
            <ul className="mt-10 grid gap-5 border-t border-foreground/15 pt-10 md:grid-cols-2 xl:grid-cols-4 md:gap-8">
              {destinations.map((destination) => (
                <li key={destination.label} data-reveal className="flex items-start gap-3">
                  <ContentIcon name={destination.icon} className="mt-0.5 size-5 shrink-0 text-foreground" />
                  <span className="flex flex-col">
                    <span className="text-foreground md:text-lg">{destination.label}</span>
                    {destination.detail ? (
                      <span className="text-sm text-foreground/70">{destination.detail}</span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
