'use client'

import React from 'react'
import Image from 'next/image'
import { ProtostarDarkLogo, ProtostarLightLogo } from '@/assets/images'
import { useScreenSize } from '@/hooks/index'

const LogoBlock = () => {
  const sm = useScreenSize('sm')

  return (
    <div className='flex items-center w-fit'>
      <Image
        src={ProtostarDarkLogo}
        width={40}
        height={40}
        alt='Protostar'
        placeholder='blur'
        className='w-auto h-auto'
      />
      {sm && (
        <p className='font-oxanium text-3xl font-semibold text-BLUE-midnight dark:text-WHITE-monotone ml-2'>
          Protostar
        </p>
      )}
    </div>
  )
}

export default LogoBlock
