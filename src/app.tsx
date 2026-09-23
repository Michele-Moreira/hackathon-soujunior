import { PageLoader } from '@/components/layout/page-loader'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { CommunitySection } from '@/components/sections/community-section'
import { FundingSection } from '@/components/sections/funding-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ImpactSection } from '@/components/sections/impact-section'
import { MissionSection } from '@/components/sections/mission-section'
import { SupportSection } from '@/components/sections/support-section'
import { WhatWeDoSection } from '@/components/sections/what-we-do-section'
import { usePageLoading } from '@/hooks/use-page-loading'

export function App() {
  const { step, isLoaded, isLoaderMounted } = usePageLoading()

  return (
    <>
      {isLoaderMounted ? <PageLoader step={step} isLoaded={isLoaded} /> : null}
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
        <FundingSection />
        <CommunitySection />
        <SupportSection />
      </main>
      <SiteFooter />
    </>
  )
}
