'use client'

import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <NextThemeProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark']}
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}

export default ThemeProvider
