import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      spacing: {
        container: '77.25rem',
        '10.5': '2.625rem',
        '4.5': '1.125rem',
        '11.5': '2.875rem',
      },
      height: {
        13: '3.25rem',
      },
      colors: {
        brand: {
          primary: '#653DF5',
        },
        effect: {
          white: {
            hover: 'rgba(255, 255, 255, 0.08)',
          },
          dark: {
            hover: 'rgba(0, 0, 0, 0.08)',
          },
        },
        background: {
          dark: {
            DEFAULT: '#040404',
            secondary: '#181818',
          },
          white: {
            DEFAULT: '#FCFCFC',
            secondary: '#F7F7F7',
          },
        },
        text: {
          dark: {
            primary: '#040404',
            secondary: '#181818',
            tertiary: '#2A2A2A',
            complementary: '#5C5C5C',
          },
          white: {
            primary: '#F0F0F0',
            secondary: '#D9D9D9',
            tertiary: '#C0C0C0',
            complementary: '#8E8E8E',
          },
        },
        border: {
          dark: {
            primary: '#040404',
            secondary: '#181818',
            tertiary: '#222222',
          },
          white: {
            primary: '#F0F0F0',
            secondary: '#D9D9D9',
          },
        },
        complementary: {
          'alert-error': '#DC2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-lexend-exa)'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
