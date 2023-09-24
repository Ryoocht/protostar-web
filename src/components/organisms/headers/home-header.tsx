import React from 'react'
import { ThemeSwitcher } from '@/atoms'
import { LogoBlock } from '@/molecules'

type Props = {}

const HomeHeader = (props: Props) => {
  return (
    <header className='w-full h-16 flex items-center justify-between'>
      <LogoBlock />
      <div>
        <p>Menu or Humbuger icon</p>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default HomeHeader
