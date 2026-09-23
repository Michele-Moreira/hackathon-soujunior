import { ContentIcon } from '@/components/layout/content-icon'
import { PageSection } from '@/components/layout/page-section'
import { SectionChip } from '@/components/layout/section-chip'
import content from '@/content/site.json'

export function WhatWeDoSection() {
  const { eyebrow, title, description, pillars, programs } = content.whatWeDo

  return (
    <PageSection id="atuacao" contentClassName="flex flex-col gap-10 md:gap-14">
      <SectionChip>{eyebrow}</SectionChip>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-6">
          <h2 id="atuacao-titulo" className="text-[32px]/[40px] font-medium md:text-[64px]/[81px]">
            {title}
          </h2>
          <p className="max-w-[620px] text-base/[22px] text-foreground/75 md:text-xl/[32px]">{description}</p>
        </div>
        <ul className="flex flex-col">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="flex flex-col gap-3 border-b border-foreground/15 py-6 first:pt-0">
              <div className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-highlight text-background md:size-[52px]">
                  <ContentIcon name={pillar.icon} className="size-5 md:size-6" />
                </span>
                <h3 className="text-xl font-semibold md:text-[28px]">{pillar.title}</h3>
              </div>
              <p className="text-sm/[20px] text-foreground/75 md:text-lg/[26px]">{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 md:gap-10">
        {programs.map((program) => (
          <li key={program.title} className="flex flex-col gap-4 rounded-2xl bg-card-muted p-7 md:p-10">
            <h3 className="text-2xl font-semibold text-accent-strong md:text-[32px]">{program.title}</h3>
            <p className="text-ink md:text-lg/[28px]">{program.description}</p>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
