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
  authors: [
    {
      name: 'Bruno Silveira Luiz',
      url: 'https://linkedin.com/in/bruno-silveira-luiz',
    },
    {
      name: 'Amauri Junior',
      url: 'https://www.linkedin.com/in/ui-amaurijunior/',
    },
  ],
  description:
    'Transformando ideias em experiências visuais cativantes, nosso design encanta, conecta e simplifica.',
  creator: 'Bruno Silveira Luiz',
  keywords: [
    'Design de Interface do Usuário',
    'Portfólio de Experiência do Usuário',
    'Mostra de Design Interativo',
    'Soluções Criativas de UX',
    'Design Responsivo de Sites',
    'Projetos Inovadores de UI/UX',
    'Design de Produtos Digitais',
    'Design Centrado no Usuário',
    'Expertise em Design Visual',
    'Prototipagem e Wireframing',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-br"
      className={`scroll-smooth antialiased ${lexendExa.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
