import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,svelte,md,mdx}",
  ],  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
}

