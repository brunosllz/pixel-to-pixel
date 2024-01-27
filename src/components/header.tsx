'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { PixelToPixelWhiteLogo } from '@/assets/pixel-to-pixel-white-logo'
import { usePathname } from 'next/navigation'

import { ArrowRight } from 'lucide-react'
import { PixelToPixelDarkLogo } from '@/assets/pixel-to-pixel-dark-logo'

const WHITE_BACKGROUND = ['/contato', '/agradecimento']

export function Header() {
  const pathName = usePathname()

  const isWhiteBackGround = WHITE_BACKGROUND.some((path) =>
    pathName.includes(path),
  )

  return (
    <header
      data-is-white-background={isWhiteBackGround}
      className="w-full bg-background-dark pb-10.5 pt-[3.25rem] data-[is-white-background=true]:bg-background-white"
    >
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-5">
        <Link href="/">
          {isWhiteBackGround ? (
            <PixelToPixelDarkLogo className="size-10.5" />
          ) : (
            <PixelToPixelWhiteLogo className="size-10.5" />
          )}

          <span className="sr-only">Pixel to Pixel</span>
        </Link>

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
    </header>
  )
}
