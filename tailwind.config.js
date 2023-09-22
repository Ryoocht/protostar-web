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
    extend: {
      fontFamily: {
        black_ops_one: ['var(--font-black-ops-one)'],
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
          powder: '94a3b8',
          light: '#f3f3f3',
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
        disabledOpacity: '0.3',
        radius: {
          small: '2px',
          medium: '4px',
          large: '6px',
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
      },
      themes: {
        light: {
          colors: {
            background: 'yellow',
          },
        },
        dark: {
          colors: {
            background: 'orange',
          },
        },
      },
    }),
  ],
}
