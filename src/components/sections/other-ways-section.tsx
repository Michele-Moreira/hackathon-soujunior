import { ExternalLink } from '@/components/layout/external-link'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { DISCORD_URL, GITHUB_URL, WHATSAPP_URL } from '@/lib/links'

const COMMUNITY_CHANNELS = [
  { href: DISCORD_URL, name: 'Discord', description: 'Tire dúvidas e participe da comunidade' },
  { href: WHATSAPP_URL, name: 'WhatsApp', description: 'Receba os avisos oficiais' },
  { href: GITHUB_URL, name: 'GitHub', description: 'Contribua com os projetos open source' },
]

export function OtherWaysSection() {
  return (
    <PageSection id="faca-parte" className="md:grid md:grid-cols-5 md:items-center">
      <div className="md:col-span-2">
        <SectionHeading
          sectionId="faca-parte"
          eyebrow="Faça parte"
          title="Conexões também movem a comunidade"
          description="Além de doar, você pode fortalecer a SouJunior participando dos canais oficiais."
        />
      </div>
      <ul className="flex flex-col gap-4 md:col-span-3">
        {COMMUNITY_CHANNELS.map((channel) => (
          <li key={channel.name}>
            <ExternalLink
              href={channel.href}
              className="flex flex-col gap-4 rounded-lg border p-6 outline-none hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              <span aria-hidden="true" className="size-10 rounded-full bg-muted" />
              <span className="flex flex-col gap-1">
                <span className="font-semibold">{channel.name}</span>
                <span className="text-sm text-muted-foreground">{channel.description}</span>
              </span>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </PageSection>
  )
}
