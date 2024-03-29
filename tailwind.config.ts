import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'

const config = withTV({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      transitionProperty: {
        'border-radius': 'border-radius',
      },
      screens: {
        xl: '1156px',
        desktop: '1280px',
      },
      spacing: {
        container: '78.5rem',
        '4.5': '1.125rem',
        '8.5': '2.125rem',
        '10.5': '2.625rem',
        '11.5': '2.875rem',
        '13': '3.25rem',
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
        blink: {
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'blinking-hand': 'blink 1s ease-in-out infinite',
      },
      backgroundImage: {
        'background-grid': "url('/background-grid.png')",
      },
      cursor: {
        figma: 'url(/figma-cursor.cur), auto',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}) satisfies Config

export default config
