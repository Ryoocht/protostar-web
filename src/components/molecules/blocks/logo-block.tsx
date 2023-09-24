'use client'

import React from 'react'
import Image from 'next/image'
import { ProtostarLogo } from '@/assets/images'
import { useScreenSize } from '@/hooks/index'

const LogoBlock = () => {
  const lg = useScreenSize('lg')
  return (
    <div className='flex items-center w-fit'>
      <Image
        src={ProtostarLogo}
        width={50}
        height={50}
        alt='Protostar'
        placeholder='blur'
        className=''
      />
      {lg && (
        <p className='font-black_ops_one text-3xl text-BLUE-midnight dark:text-GRAY-powder '>
          PROTOSTAR
        </p>
      )}
    </div>
  )
}

export default LogoBlock
