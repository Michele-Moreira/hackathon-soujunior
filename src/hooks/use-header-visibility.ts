import { useCallback, useEffect, useState } from 'react'

const TOP_THRESHOLD = 140
const POINTER_ZONE = 80

export function useHeaderVisibility(isPinned: boolean) {
  const [isVisible, setIsVisible] = useState(true)
  const show = useCallback(() => setIsVisible(true), [])

  useEffect(() => {
    let frame = 0
    let previousScrollY = window.scrollY

    const update = () => {
      frame = 0
      const currentScrollY = window.scrollY

      if (currentScrollY < TOP_THRESHOLD) {
        setIsVisible(true)
      } else if (currentScrollY > previousScrollY) {
        setIsVisible(false)
      } else if (currentScrollY < previousScrollY) {
        setIsVisible(true)
      }

      previousScrollY = currentScrollY
    }

    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const handlePointerMove = (event: PointerEvent) => {
      if (event.clientY <= POINTER_ZONE) setIsVisible(true)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return { isHeaderVisible: isPinned || isVisible, show }
}
