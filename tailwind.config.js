/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': '#1a1a2e',
        'secondary': '#16213e',
        'accent': '#ffd700',
        'text-light': '#e8e8e8',
        'text-muted': '#a0a0a0',
      }
    },
  },
  plugins: [],
}
