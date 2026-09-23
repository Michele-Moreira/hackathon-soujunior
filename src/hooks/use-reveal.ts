import { useEffect, useRef, useState } from 'react'

const supportsObserver = typeof window !== 'undefined' && 'IntersectionObserver' in window

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(!supportsObserver)

  useEffect(() => {
    const element = ref.current
    if (!element || !supportsObserver) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}
