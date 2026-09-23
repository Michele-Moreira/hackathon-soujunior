import { useCallback, useEffect, useState } from 'react'

const TOP_THRESHOLD = 140
const POINTER_ZONE = 80
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

export function useHeaderVisibility(isPinned: boolean) {
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => window.matchMedia(REDUCED_MOTION).matches)
  const show = useCallback(() => setIsVisible(true), [])

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION)
    const handleChange = () => setPrefersReducedMotion(query.matches)

    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

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
    if (isVisible) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const handlePointerMove = (event: PointerEvent) => {
      if (event.clientY <= POINTER_ZONE) setIsVisible(true)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [isVisible])

  return { isHeaderVisible: isPinned || prefersReducedMotion || isVisible, show }
}
