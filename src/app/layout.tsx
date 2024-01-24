import type { Metadata } from 'next'
import { Lexend_Exa } from 'next/font/google'
import './globals.css'

const lexendExa = Lexend_Exa({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lexend-exa',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Pixel to Pixel',
    default: 'Pixel to Pixel',
  },
  description: 'Amauri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`antialiased ${lexendExa.variable}`}>
      <body>{children}</body>
    </html>
  )
}
