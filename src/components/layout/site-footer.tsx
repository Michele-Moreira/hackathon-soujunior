import { ApoiaSeIcon } from '@/components/layout/apoia-se-icon'
import { BrandIcon } from '@/components/layout/brand-icon'
import { ExternalLink } from '@/components/layout/external-link'
import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import { DISCORD_ICON_PATH, GITHUB_ICON_PATH, WHATSAPP_ICON_PATH } from '@/lib/brand-icons'
import { APOIA_SE_URL, DISCORD_URL, GITHUB_URL, WHATSAPP_URL } from '@/lib/links'

const SOCIAL_LINKS = [
  { href: APOIA_SE_URL, label: 'Apoia.se', icon: <ApoiaSeIcon /> },
  { href: WHATSAPP_URL, label: 'WhatsApp', icon: <BrandIcon path={WHATSAPP_ICON_PATH} /> },
  { href: GITHUB_URL, label: 'GitHub', icon: <BrandIcon path={GITHUB_ICON_PATH} /> },
  { href: DISCORD_URL, label: 'Discord', icon: <BrandIcon path={DISCORD_ICON_PATH} /> },
]

export function SiteFooter() {
  return (
    <footer className="bg-muted px-4 py-8 text-foreground md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <SouJuniorLogo className="h-7" />
        <p className="text-sm">© 2026 SouJunior</p>
        <ul className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <ExternalLink
                href={link.href}
                className="flex rounded-md p-1 text-muted-foreground outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
