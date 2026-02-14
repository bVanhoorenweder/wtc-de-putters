/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'encox': {
          'primary': '#24A19C',      // Green
          'secondary': '#C2357B',    // WTC Pink
          'blue': '#293B5F',         // Dark blue
          'heading': '#261C2C',      // Dark purple-gray
          'text': '#666666',         // Body text
          'gray-bg': '#F4F4F4',      // Light background
          'footer': '#0e293e',       // Footer dark blue
        },
      },
      fontFamily: {
        'heading': ['Lexend', 'sans-serif'],
        'body': ['Archivo', 'sans-serif'],
      },
      fontSize: {
        'hero': '60px',
        'h2': '45px',
        'subtitle': '28px',
      },
      spacing: {
        'section': '100px',
      },
    },
  },
  plugins: [],
}