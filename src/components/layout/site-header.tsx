import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/layout/external-link'
import { SouJuniorLogo } from '@/components/layout/soujunior-logo'
import content from '@/content/site.json'
import { useActiveSection } from '@/hooks/use-active-section'
import { useHeaderVisibility } from '@/hooks/use-header-visibility'
import { APOIA_SE_URL } from '@/lib/links'
import { cn } from '@/lib/utils'

const SECTION_IDS = content.header.nav.map((link) => link.href.slice(1))

export function SiteHeader() {
  const { nav, supportLabel } = content.header
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)
  const { isHeaderVisible, show } = useHeaderVisibility(isMenuOpen)

  const handleToggleMenu = () => setIsMenuOpen((open) => !open)
  const handleCloseMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header
      onFocusCapture={show}
      className={cn(
        'sticky top-0 z-20 bg-primary transition-transform [transition-duration:var(--duration-quick)] ease-out',
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="mx-auto flex h-[91px] w-full max-w-[1636px] items-center justify-between px-9 md:h-[96px] md:px-11">
        <a href="#inicio" aria-label="SouJunior, voltar ao início" className="text-primary-foreground">
          <SouJuniorLogo className="h-[38px] md:h-[55px]" />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((link) => {
              const isActive = link.href.slice(1) === activeId
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'border-b-2 pb-1 text-xl transition-colors',
                      isActive
                        ? 'border-primary-foreground font-medium text-primary-foreground'
                        : 'border-transparent text-primary-foreground/80 hover:text-primary-foreground',
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <Button asChild variant="cta" className="hidden h-[55px] px-8 text-xl lg:inline-flex">
          <ExternalLink href={APOIA_SE_URL}>{supportLabel}</ExternalLink>
        </Button>

        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={handleToggleMenu}
          className="rounded-md p-2 text-primary-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-primary-foreground/50 lg:hidden"
        >
          {isMenuOpen ? <X className="size-8" /> : <Menu className="size-8" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        inert={!isMenuOpen}
        data-open={isMenuOpen || undefined}
        className="grid grid-rows-[0fr] overflow-hidden bg-primary transition-[grid-template-rows] [transition-duration:var(--duration-quick)] ease-out data-open:grid-rows-[1fr] motion-reduce:transition-none lg:hidden"
      >
        <div className="overflow-hidden border-t border-primary-foreground/20 px-9 pb-8">
          <nav aria-label="Seções da página, menu do celular">
            <ul className="flex flex-col">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleCloseMenu}
                    className="block border-b border-primary-foreground/20 py-4 text-lg text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <Button asChild variant="cta" className="mt-6 h-[52px] w-full text-base">
            <ExternalLink href={APOIA_SE_URL}>{supportLabel}</ExternalLink>
          </Button>
        </div>
      </div>
    </header>
  )
}
