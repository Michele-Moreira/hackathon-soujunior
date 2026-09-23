import { ExternalLink } from '@/components/layout/external-link'
import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import content from '@/content/site.json'
import { APOIA_SE_URL, DISCORD_URL, GITHUB_URL, SITE_URL, WHATSAPP_URL } from '@/lib/links'

const FOOTER_LINKS = [
  { id: 'apoiase', href: APOIA_SE_URL },
  { id: 'discord', href: DISCORD_URL },
  { id: 'whatsapp', href: WHATSAPP_URL },
  { id: 'github', href: GITHUB_URL },
  { id: 'site', href: SITE_URL },
] as const

export function SiteFooter() {
  const { tagline, links, copyright, campaign } = content.footer

  return (
    <footer className="bg-surface-deep px-9 pt-10 pb-6 md:px-11">
      <div className="mx-auto w-full max-w-[1636px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SouJuniorLogo className="h-[30px] text-foreground md:h-[34px]" />
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {FOOTER_LINKS.map(({ id, href }) => (
              <li key={id}>
                <ExternalLink
                  href={href}
                  className="rounded-sm text-foreground outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {links[id]}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-7 flex flex-col gap-4 border-b border-foreground/15 pb-6 md:grid md:grid-cols-3 md:items-center md:gap-0">
          <p className="text-foreground/80">{tagline}</p>
          <div className="flex flex-col items-center gap-1 text-sm">
            <p className="text-foreground/70">{campaign}</p>
            <p className="text-foreground">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
