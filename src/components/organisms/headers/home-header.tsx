'use client'

import React from 'react'
import Link from 'next/link'
import { LogoBlock } from '@/molecules'
import { ThemeSwitcher } from '@/atoms'
import { useScreenSize } from '@/hooks/index'

const HomeHeader = () => {
  const lg = useScreenSize('lg')

  return (
    <header className='w-full h-14 lg:h-16 flex items-center justify-between px-7 pt-5'>
      <LogoBlock />
      <div className='flex items-center font-oxanium gap-x-5 uppercase'>
        {lg ? (
          <>
            <Link href={'/'}>
              <p>Home</p>
            </Link>
            <Link href={'/about-us'}>
              <p>US</p>
            </Link>
            <Link href={'/auth/tutor/signup'}>
              <p>Become Tutor</p>
            </Link>
            <Link href={'/auth/student/signup'}>
              <p>Become Student</p>
            </Link>
            <p>Login Dropdown</p>
          </>
        ) : (
          <div>humberger menu</div>
        )}
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default HomeHeader
