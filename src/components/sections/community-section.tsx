import { ContentIcon } from '@/components/layout/content-icon'
import { MascotImage } from '@/components/layout/mascot-image'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'

export function CommunitySection() {
  const { eyebrow, title, description, personas } = content.community

  return (
    <PageSection id="faca-parte" contentClassName="flex flex-col gap-10 md:gap-14">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          <SectionChip>{eyebrow}</SectionChip>
          <h2 id="faca-parte-titulo" className="max-w-[640px] text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[640px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        </div>
        <MascotImage name="faca-parte" className="mx-auto lg:mx-0" />
      </div>
      <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
        {personas.map((persona) => (
          <li key={persona.title} className="flex flex-col rounded-2xl bg-primary-foreground">
            <span className="flex items-center border-b border-ink/10 px-7 py-6 text-primary">
              <ContentIcon name={persona.icon} className="size-7" />
            </span>
            <div className="flex flex-col gap-3 px-7 py-6">
              <h3 className="font-semibold text-ink">{persona.title}</h3>
              <p className="text-sm text-accent-strong italic">&ldquo;{persona.quote}&rdquo;</p>
              <p className="text-sm/[20px] text-ink/80">{persona.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
