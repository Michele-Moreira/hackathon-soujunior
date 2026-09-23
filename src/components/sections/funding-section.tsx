import { ContentIcon } from '@/components/layout/content-icon'
import { MascotImage } from '@/components/layout/mascot-image'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'

export function FundingSection() {
  const { eyebrow, title, description, cards, destinations } = content.funding

  return (
    <section id="financiamento" aria-labelledby="financiamento-titulo" className="scroll-mt-[91px] md:scroll-mt-[96px]">
      <div className="px-9 py-16 md:px-11 md:py-24">
        <div className="mx-auto flex w-full max-w-[1636px] flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <SectionChip>{eyebrow}</SectionChip>
            <h2 id="financiamento-titulo" className="text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
              {title}
            </h2>
            <p className="max-w-[760px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
          </div>
          <MascotImage name="financiamento" className="mx-auto lg:mx-0" />
        </div>
      </div>

      <div className="bg-band px-9 py-14 md:px-11 md:py-16">
        <div className="mx-auto w-full max-w-[1636px]">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {cards.map((card) => (
              <li key={card.title} className="flex flex-col gap-4 rounded-2xl bg-card-muted p-6 md:p-7">
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
          <ul className="mt-10 grid gap-5 border-t border-foreground/15 pt-10 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {destinations.map((destination) => (
              <li key={destination.label} className="flex items-start gap-3">
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
        </div>
      </div>
    </section>
  )
}
