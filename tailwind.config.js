/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        paper: {
          DEFAULT: 'rgb(var(--color-paper) / <alpha-value>)',
          contrast: 'rgb(var(--color-paper-contrast) / <alpha-value>)',
        },
        'paper-contrast': 'rgb(var(--color-paper-contrast) / <alpha-value>)',
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
        },
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        gold: 'rgb(var(--color-gold) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,.10)',
      },
    },
  },
  plugins: [],
};
