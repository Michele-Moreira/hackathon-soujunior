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
    <footer className="bg-surface-deep px-9 py-12 md:px-11">
      <div className="mx-auto w-full max-w-[1636px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <SouJuniorLogo className="h-[38px] text-foreground md:h-[46px]" />
            <p className="text-foreground/80">{tagline}</p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
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
        <div className="mt-10 flex flex-col items-center gap-1 border-t border-foreground/15 pt-8 text-sm">
          <p className="text-foreground">{copyright}</p>
          <p className="text-foreground/70">{campaign}</p>
        </div>
      </div>
    </footer>
  )
}
