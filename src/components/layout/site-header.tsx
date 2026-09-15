import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import { APOIA_SE_URL, NAV_LINKS } from '@/lib/links'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 px-4 backdrop-blur md:px-8">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 md:h-20">
        <a href="#inicio" aria-label="SouJunior, voltar ao início">
          <SouJuniorLogo className="h-7 md:h-9" />
        </a>
        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild variant="outline">
          <ExternalLink href={APOIA_SE_URL}>Apoie</ExternalLink>
        </Button>
      </div>
    </header>
  )
}
