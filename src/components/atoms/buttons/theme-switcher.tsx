'use client'

import React from 'react'
import { Switch } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@/assets/icons'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      defaultSelected
      size='lg'
      color='secondary'
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  )
}

export default ThemeSwitcher
