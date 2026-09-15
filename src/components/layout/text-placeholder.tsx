export function TextPlaceholder() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-3">
      <div className="h-2 w-full rounded-full bg-muted" />
      <div className="h-2 w-3/4 rounded-full bg-muted" />
    </div>
  )
}
