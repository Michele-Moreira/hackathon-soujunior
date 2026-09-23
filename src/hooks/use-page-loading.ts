import { useEffect, useState } from 'react'
import { MASCOT_DESKTOP_QUERY, mascotSrc } from '@/lib/mascots'

const MINIMUM_MS = 600
const TIMEOUT_MS = 5000
const FADE_MS = 400

const LOADING_STEPS = 3

export function usePageLoading() {
  const [step, setStep] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoaderMounted, setIsLoaderMounted] = useState(true)

  useEffect(() => {
    const startedAt = performance.now()
    const timers: number[] = []
    let isCancelled = false
    let hasFinished = false

    const advanceTo = (value: number) => {
      if (!isCancelled) setStep((current) => Math.max(current, value))
    }

    const finish = () => {
      if (isCancelled || hasFinished) return
      hasFinished = true
      const remaining = Math.max(0, MINIMUM_MS - (performance.now() - startedAt))

      timers.push(
        window.setTimeout(() => {
          if (isCancelled) return
          setStep(LOADING_STEPS)
          setIsLoaded(true)
          timers.push(
            window.setTimeout(() => {
              if (!isCancelled) setIsLoaderMounted(false)
            }, FADE_MS),
          )
        }, remaining),
      )
    }

    const heroMascot = new Image()
    heroMascot.src = mascotSrc('inicio', !window.matchMedia(MASCOT_DESKTOP_QUERY).matches)

    const fontsReady = document.fonts.ready.catch(() => undefined).then(() => advanceTo(1))
    const mascotReady = (heroMascot.decode?.() ?? Promise.resolve())
      .catch(() => undefined)
      .then(() => advanceTo(2))

    const bailOut = window.setTimeout(finish, TIMEOUT_MS)

    Promise.all([fontsReady, mascotReady]).then(() => {
      window.clearTimeout(bailOut)
      finish()
    })

    return () => {
      isCancelled = true
      window.clearTimeout(bailOut)
      timers.forEach(window.clearTimeout)
    }
  }, [])

  return { step, isLoaded, isLoaderMounted }
}
