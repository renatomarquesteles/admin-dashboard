'use client'

import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ColorModeContext, useMode } from '@/styles/theme'

interface ThemeProvidersProps {
  children: ReactNode
}

export function ThemeProviders({ children }: ThemeProvidersProps) {
  const { colorMode, theme } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
