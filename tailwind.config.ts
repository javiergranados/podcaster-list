import daisyui from 'daisyui'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1-20': 'repeat(1, minmax(20rem, 1fr));',
        '2-20': 'repeat(2, minmax(20rem, 1fr));',
        '3-20': 'repeat(3, minmax(20rem, 1fr));',
        '4-20': 'repeat(4, minmax(20rem, 1fr));',
      },
    },
  },
  darkMode: ['class', '[data-theme="forest"]'],
  plugins: [daisyui],
  daisyui: {
    themes: ['pastel', 'forest'],
  },
}

export default config
