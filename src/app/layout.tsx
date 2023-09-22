import '../styles/globals.css'
import { Black_Ops_One, Orbit, Exo } from 'next/font/google'

import dynamic from 'next/dynamic'
const ThemeProvider = dynamic(() => import('@/providers/theme-provider'), {
  ssr: false,
})

const black_ops_one = Black_Ops_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-black-ops-one',
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
          ${black_ops_one.variable} 
          ${orbit.variable} 
          ${exo.variable} 
          font-sans
        `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
