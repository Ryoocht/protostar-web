import '../styles/globals.css'
import { Oxanium, Orbit, Exo } from 'next/font/google'

import dynamic from 'next/dynamic'
import Script from 'next/script'
const ThemeProvider = dynamic(() => import('@/providers/theme-provider'), {
  ssr: false,
})

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
})

const orbit = Orbit({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-orbit',
})

const exo = Exo({
  subsets: ['latin'],
  variable: '--font-exo',
})

export const metadata = {
  title: 'Protostar',
  description: 'Unleash Your Future: Your Journey Starts Like A Protostar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`
          ${oxanium.variable} 
          ${orbit.variable} 
          ${exo.variable} 
          font-sans
        `}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Script
          type='module'
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        ></Script>
        <Script
          noModule
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        ></Script>
      </body>
    </html>
  )
}
