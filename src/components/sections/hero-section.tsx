import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SupportButton } from '@/components/layout/support-button'
import content from '@/content/site.json'

export function HeroSection() {
  const { eyebrow, title, description, supportLabel } = content.hero

  return (
    <PageSection id="inicio" className="md:grid md:grid-cols-2 md:items-center">
      <div className="flex flex-col items-start gap-5">
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
        <h1 id="inicio-titulo" className="text-4xl font-bold md:text-6xl">
          {title}
        </h1>
        <p className="text-muted-foreground md:text-lg">{description}</p>
        <SupportButton>{supportLabel}</SupportButton>
      </div>
      <ImagePlaceholder className="aspect-square w-full" />
    </PageSection>
  )
}
