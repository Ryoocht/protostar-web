'use client'

import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useScreenSize } from '@/hooks/index'
import { ProtostarDarkLogo, ProtostarLightLogo } from '@/assets/images'

const LogoBlock = () => {
  const { theme } = useTheme()
  const sm = useScreenSize('sm')

  return (
    <div className='flex items-center w-fit'>
      <Image
        src={theme === 'dark' ? ProtostarDarkLogo : ProtostarLightLogo}
        width={40}
        height={40}
        alt='Protostar'
        placeholder='blur'
        className='w-auto h-auto'
      />
      {sm && (
        <p className='font-oxanium text-3xl font-semibold text-BLUE-midnight dark:text-WHITE-monotone ml-2 pt-1'>
          Protostar
        </p>
      )}
    </div>
  )
}

export default LogoBlock
