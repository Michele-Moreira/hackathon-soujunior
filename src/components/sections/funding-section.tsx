import { ImagePlaceholder } from '@/components/layout/image-placeholder'
import { PageSection } from '@/components/layout/page-section'
import { SectionHeading } from '@/components/layout/section-heading'
import { StatCard } from '@/components/layout/stat-card'
import content from '@/content/site.json'
import { formatBRL } from '@/lib/format'

export function FundingSection() {
  const { eyebrow, title, description, expenses } = content.funding

  return (
    <PageSection id="financiamento">
      <SectionHeading sectionId="financiamento" eyebrow={eyebrow} title={title} description={description} />
      <dl className="grid grid-cols-2 lg:grid-cols-4">
        {expenses.map((expense, index) =>
          expense.amount > 0 ? (
            <StatCard
              key={index}
              value={formatBRL(expense.amount)}
              label={expense.service}
              className="aspect-square border border-background lg:aspect-14/13"
            />
          ) : (
            <ImagePlaceholder
              key={index}
              className="aspect-square rounded-none border border-background lg:aspect-14/13"
            />
          ),
        )}
      </dl>
    </PageSection>
  )
}
