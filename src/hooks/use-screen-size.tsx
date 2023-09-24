'use client'

import { useEffect, useState } from 'react'

type TailwindBreakpoint = 'sm' | 'md' | 'lg' | 'xl'

const useScreenSize = (breakpoint: TailwindBreakpoint) => {
  const [isScreenLarger, setIsScreenLarger] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      const screenSizes: Record<TailwindBreakpoint, number> = {
        sm: 480,
        md: 768,
        lg: 1024,
        xl: 1280,
      }

      setIsScreenLarger(window.innerWidth > screenSizes[breakpoint])
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [breakpoint])

  return isScreenLarger
}

export default useScreenSize
