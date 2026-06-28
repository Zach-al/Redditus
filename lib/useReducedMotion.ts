'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const check = () => {
      const memory = (navigator as any).deviceMemory
      const cores = navigator.hardwareConcurrency
      const isMobile = /Mobi|Android/i.test(navigator.userAgent)
      setIsLowEnd(isMobile && (!memory || memory < 4 || !cores || cores < 4))
    }
    check()
  }, [])

  return prefersReduced || isLowEnd
}
