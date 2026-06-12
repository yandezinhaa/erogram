/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'erogram-red': '#b31b1b',
        'erogram-dark': '#0a0a0a',
        'erogram-header': '#0d0d0d',
        'erogram-blue': '#0088cc',
        'erogram-blue-text': '#4ab3f4',
      },
    },
  },
  plugins: [],
}
