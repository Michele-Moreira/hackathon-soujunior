import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SupportButton } from '@/components/layout/support-button'

export function HeroSection() {
  return (
    <PageSection id="inicio" className="md:grid md:grid-cols-2 md:items-center">
      <div className="flex flex-col items-start gap-5">
        <p className="text-sm font-medium text-muted-foreground">Início</p>
        <h1 id="inicio-titulo" className="text-4xl font-bold md:text-6xl">
          Apoie quem está construindo o próprio amanhã
        </h1>
        <p className="text-muted-foreground md:text-lg">
          A SouJunior transforma o aprendizado em experiência real e o seu apoio ajuda esse trabalho a continuar.
        </p>
        <SupportButton>Apoie a partir de R$ 2,00</SupportButton>
      </div>
      <ImagePlaceholder className="aspect-square w-full" />
    </PageSection>
  )
}
