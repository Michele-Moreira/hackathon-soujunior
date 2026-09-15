type Props = {
  sectionId: string
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ sectionId, eyebrow, title, description }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      <h2 id={`${sectionId}-titulo`} className="text-3xl font-bold md:text-4xl">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
