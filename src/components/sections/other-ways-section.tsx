import { ExternalLink } from '@/components/layout/external-link'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import content from '@/content/site.json'
import { DISCORD_URL, GITHUB_URL, WHATSAPP_URL } from '@/lib/links'

const COMMUNITY_CHANNELS = [
  { id: 'discord', href: DISCORD_URL },
  { id: 'whatsapp', href: WHATSAPP_URL },
  { id: 'github', href: GITHUB_URL },
] as const

export function OtherWaysSection() {
  const { eyebrow, title, description, channels } = content.community

  return (
    <PageSection id="faca-parte" className="md:grid md:grid-cols-5 md:items-center">
      <div className="md:col-span-2">
        <SectionHeading sectionId="faca-parte" eyebrow={eyebrow} title={title} description={description} />
      </div>
      <ul className="flex flex-col gap-4 md:col-span-3">
        {COMMUNITY_CHANNELS.map(({ id, href }) => (
          <li key={id}>
            <ExternalLink
              href={href}
              className="flex flex-col gap-4 rounded-lg border p-6 outline-none hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <span aria-hidden="true" className="size-10 rounded-full bg-muted" />
              <span className="flex flex-col gap-1">
                <span className="font-semibold">{channels[id].name}</span>
                <span className="text-sm text-muted-foreground">{channels[id].description}</span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
