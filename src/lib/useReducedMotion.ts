import { useEffect, useState } from 'react'

const mediaQuery = '(prefers-reduced-motion: reduce)'

function getInitialPreference() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia(mediaQuery).matches
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getInitialPreference,
  )

  useEffect(() => {
    const matcher = window.matchMedia(mediaQuery)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    matcher.addEventListener('change', handleChange)

    return () => {
      matcher.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}
