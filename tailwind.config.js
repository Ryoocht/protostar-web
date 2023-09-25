// tailwind.config.js
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        oxanium: ['var(--font-oxanium)'],
        orbit: ['var(--font-orbit)'],
        exo: ['var(--font-exo)'],
      },
      colors: {
        BLACK: {
          monotone: '#000000',
          jet: '#111111',
        },
        BLUE: {
          midnight: '#0f172a',
          dark: '#1e293b',
          royal: '#2261a1',
        },
        GRAY: {
          slate: '#64748b',
          powder: '#94a3b8',
          light: '#f3f3f3',
          bright: '#38bdf8',
        },
        ORANGE: {
          vermilion: '#ec3c0b',
          tangerine: '#ff5405',
        },
        YELLOW: {
          lemon: '#fde047',
        },
        WHITE: {
          sky: '#e2e8f0',
          alice: '#f1f5f9',
          monotone: '#FFFFFF',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        radius: {
          sm: '3px',
          md: '5px',
          lg: '10px',
          xl: '30px',
        },
        borderWidth: {
          sm: '1px',
          md: '2px',
          lg: '3px',
        },
      },
      themes: {
        light: {
          colors: {
            background: '#F3FAFF',
            text: {
              primary: '#7dd3fc',
            },
          },
        },
        dark: {
          colors: {
            background: '#111827',
            text: {
              primary: '#7dd3fc',
            },
          },
        },
      },
    }),
  ],
}
