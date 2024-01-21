import type { Metadata } from 'next'
import { Lexend_Exa } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const lexendExa = Lexend_Exa({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lexend-exa',
})

export const metadata: Metadata = {
  title: 'Pixel to Pixel',
  description: 'Amauri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={`antialiased ${lexendExa.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
