import React from 'react'
import { ThemeSwitcher } from '@/atoms'

type Props = {}

const HomeHeader = (props: Props) => {
  return (
    <header>
      <div>Logo & Title</div>
      <div>
        <p>Menu or Humbuger icon</p>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

export default HomeHeader
