import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import content from '@/content/site.json'
import { APOIA_SE_URL } from '@/lib/links'

export function SiteHeader() {
  const { nav, supportLabel } = content.header

  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 px-4 backdrop-blur md:px-8">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 md:h-20">
        <a href="#inicio" aria-label="SouJunior, voltar ao início">
          <SouJuniorLogo className="h-7 md:h-9" />
        </a>
        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex gap-6">
            {nav.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild variant="outline">
          <ExternalLink href={APOIA_SE_URL}>{supportLabel}</ExternalLink>
        </Button>
      </div>
    </header>
  )
}
