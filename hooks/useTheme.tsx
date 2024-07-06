'use client'

import { useEffect, useRef, useState } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const mediaQueryList = useRef<MediaQueryList>()
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleMatchMediaChange = (colorSchemeDark: MediaQueryListEvent) => {
    if ((theme === 'light' && colorSchemeDark.matches) || (theme === 'dark' && !colorSchemeDark.matches)) {
      toggleTheme()
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'pastel' : 'forest')
  }, [theme])

  useEffect(() => {
    mediaQueryList.current = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQueryList.current.addEventListener('change', handleMatchMediaChange)

    return () => {
      mediaQueryList.current?.removeEventListener('change', handleMatchMediaChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { theme, toggleTheme }
}
