import { useCallback, useEffect, useRef, useState } from 'react'

const TOP_THRESHOLD = 140
const SCROLL_DELTA = 8
const POINTER_ZONE = 80
const SCROLL_SETTLE_MS = 150
const NAVIGATION_TIMEOUT_MS = 2000
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

export function useHeaderVisibility(isPinned: boolean) {
  const [isVisible, setIsVisible] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => window.matchMedia(REDUCED_MOTION).matches)
  const show = useCallback(() => setIsVisible(true), [])
  const isNavigatingRef = useRef(false)
  const settleTimerRef = useRef(0)
  const timeoutTimerRef = useRef(0)

  const finishNavigation = useCallback(() => {
    window.clearTimeout(settleTimerRef.current)
    window.clearTimeout(timeoutTimerRef.current)
    isNavigatingRef.current = false
  }, [])

  const waitForScrollToSettle = useCallback(() => {
    window.clearTimeout(settleTimerRef.current)
    settleTimerRef.current = window.setTimeout(finishNavigation, SCROLL_SETTLE_MS)
  }, [finishNavigation])

  const startNavigation = useCallback(() => {
    finishNavigation()
    isNavigatingRef.current = true
    setIsVisible(true)
    waitForScrollToSettle()
    timeoutTimerRef.current = window.setTimeout(finishNavigation, NAVIGATION_TIMEOUT_MS)
  }, [finishNavigation, waitForScrollToSettle])

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

      if (isNavigatingRef.current || currentScrollY < TOP_THRESHOLD) {
        setIsVisible(true)
        previousScrollY = currentScrollY
        return
      }

      const delta = currentScrollY - previousScrollY
      if (Math.abs(delta) < SCROLL_DELTA) return

      setIsVisible(delta < 0)
      previousScrollY = currentScrollY
    }

    const handleScroll = () => {
      if (isNavigatingRef.current) waitForScrollToSettle()
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('scrollend', finishNavigation)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scrollend', finishNavigation)
      if (frame) cancelAnimationFrame(frame)
      finishNavigation()
    }
  }, [finishNavigation, waitForScrollToSettle])

  useEffect(() => {
    if (isVisible) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const handlePointerMove = (event: PointerEvent) => {
      if (event.clientY <= POINTER_ZONE) setIsVisible(true)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [isVisible])

  return { isHeaderVisible: isPinned || prefersReducedMotion || isVisible, show, startNavigation }
}
