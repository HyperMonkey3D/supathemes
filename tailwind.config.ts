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
        "brand-purple": "#6D08EC",
        "brand-square-purple": "rgba(154,1,249,0.25)",
        "brand-square-dark-pink": "rgba(246, 33, 136, 0.25)",
        "brand-square-green": "rgba(36, 249, 45, 0.25)",
        "brand-stroke-dark-gray": "#2E2E2E"
        
      }
    },
  },
  plugins: [],
}
export default config
