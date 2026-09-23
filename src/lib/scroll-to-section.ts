const TITLE_GAP = 16

// offsetTop ignores the translateY of the reveal animation, so sections that
// have not appeared yet land in the same place as the ones already on screen.
function getPageTop(element: HTMLElement) {
  let top = 0
  let node: HTMLElement | null = element

  while (node) {
    top += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }

  return top
}

export function scrollToSection(id: string, headerHeight: number) {
  const section = document.getElementById(id)
  if (!section) return false

  const title = section.querySelector<HTMLElement>('[data-section-title]') ?? section
  window.scrollTo({ top: getPageTop(title) - headerHeight - TITLE_GAP })
  history.pushState(null, '', `#${id}`)
  return true
}
