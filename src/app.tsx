import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { HeroSection } from '@/components/sections/hero-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { MissionSection } from '@/components/sections/mission-section'
import { OtherWaysSection } from '@/components/sections/other-ways-section'
import { SupportCtaSection } from '@/components/sections/support-cta-section'
import { SupportImpactSection } from '@/components/sections/support-impact-section'
import { WhatWeDoSection } from '@/components/sections/what-we-do-section'

export function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-20 focus:rounded-md focus:bg-background focus:px-4 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <MissionSection />
        <WhatWeDoSection />
        <ImpactSection />
        <SupportImpactSection />
        <OtherWaysSection />
        <SupportCtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
