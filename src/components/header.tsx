'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { PixelToPixelWhiteLogo } from '@/assets/pixel-to-pixel-white-logo'
import { usePathname } from 'next/navigation'

import { ArrowRight } from 'lucide-react'
import { PixelToPixelDarkLogo } from '@/assets/pixel-to-pixel-dark-logo'

const WHITE_BACKGROUND = ['/contato', '/agradecimento']

const NAV_LINKS = [
  {
    href: '#projetos',
    label: 'Projetos',
  },
  {
    href: '#o-que-fazemos',
    label: 'O que fazemos',
  },
  {
    href: '#processos',
    label: 'Processos',
  },
  {
    href: '#feedbacks',
    label: 'Feedbacks',
  },
]

export function Header() {
  const pathName = usePathname()

  const isWhiteBackGround = WHITE_BACKGROUND.some((path) =>
    pathName.includes(path),
  )

  return (
    <header
      data-is-white-background={isWhiteBackGround}
      className="w-full bg-background-dark pt-5 data-[is-white-background=true]:bg-background-white md:pt-8 lg:pt-10.5"
    >
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-5 md:px-8 lg:px-5">
        <Link href="/">
          {isWhiteBackGround ? (
            <PixelToPixelDarkLogo className="size-10.5" />
          ) : (
            <PixelToPixelWhiteLogo className="size-10.5" />
          )}

          <span className="sr-only">Pixel to Pixel</span>
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    data-is-white-background={isWhiteBackGround}
                    className="flex items-center justify-center gap-2 text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none data-[is-white-background=true]:text-border-dark-secondary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {!isWhiteBackGround && (
            <Button size="sm" className="max-w-min" variant="secondary" asChild>
              <Link href="/contato">
                <span>
                  Entrar em contato
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="hidden md:flex"
                  />
                </span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
