import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "brand-dark-gray": "#1E1E1E",
        "brand-darker-gray": "#1B1B1B",
        "brand-purple": "#6D08EC",
        "brand-square-purple": "rgba(154,1,249,0.25)",
        "brand-square-dark-pink": "rgba(246, 33, 136, 0.25)",
        "brand-square-green": "rgba(36, 249, 45, 0.25)",
        "brand-stroke-dark-gray": "#2E2E2E",
        "brand-scarlet": "rgba(89, 0, 30, 1)",
        "brand-light-scarlet": "rgba(249, 87, 143, 1)",
        "brand-dark-scarlet": "rgba(30, 30, 30, 1)",
        "brand-purple-light": "rgba(109, 8, 236, 1)",
        "brand-purple-mid": "rgba(84, 0, 192, 1)",
        "brand-purple-dark": "rgba(38, 4, 82, 1)",
        "brand-purple-blend": "rgba(109, 8, 236, 0.10)",
        "brand-pink": "#F9578F"
      }
    },
  },
  plugins: [],
}
export default config
