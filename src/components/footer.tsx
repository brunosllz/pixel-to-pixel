'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PixelToPixelWhiteLogo } from '@/assets/pixel-to-pixel-white-logo'
import { usePathname } from 'next/navigation'
import { ButtonBackToTop } from './button-back-to-top'

const HIDDEN_BUTTON = ['/contato', '/agradecimento']

export function Footer() {
  const pathName = usePathname()

  const isShowButton = !HIDDEN_BUTTON.some((path) => pathName.includes(path))

  return (
    <footer className="w-full bg-background-dark pb-6 pt-16">
      <div className="mx-auto w-full max-w-container px-5">
        <PixelToPixelWhiteLogo width={48} height={48} />

        <p className="mb-8 mt-6 text-text-white-primary md:max-w-[30.5rem]">
          Da ideia à realidade, cada pixel conta uma história de excelência e
          inovação.
        </p>

        {isShowButton && (
          <Button asChild className="w-full md:max-w-max">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-3"
            >
              Entrar em contato <ArrowRight size={20} />
            </Link>
          </Button>
        )}

        <div className="mt-12 grid grid-cols-3 gap-8 md:max-w-[24.625rem]">
          <Link
            href="https://www.linkedin.com/in/ui-amaurijunior/"
            className="flex items-center justify-center gap-2 text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
            target="_blank"
          >
            Linkedin
            <ArrowUpRight className="hidden size-4.5 md:flex" />
          </Link>

          <Link
            href="https://www.behance.net/ui_amauri"
            className="flex items-center justify-center gap-2 text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
            target="_blank"
          >
            Behance
            <ArrowUpRight className="hidden size-4.5 md:flex" />
          </Link>

          <Link
            href="https://dribbble.com/amaurijunior"
            className="flex items-center justify-center gap-2 text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
            target="_blank"
          >
            Dribbble
            <ArrowUpRight className="hidden size-4.5 md:flex" />
          </Link>
        </div>

        <div className="mt-10.5 space-y-8 border-t border-border-dark-secondary pt-5 md:flex md:items-center md:justify-between md:space-y-0">
          <span className="block text-center text-sm text-text-white-complementary md:hidden">
            @PixeltoPixel {new Date().getFullYear()}
          </span>

          <span className="block items-center text-center text-sm text-text-white-complementary md:text-base">
            Code by:{' '}
            <span className="text-sm text-text-white-secondary md:text-base">
              @desenvolvedor
            </span>
          </span>

          <span className="hidden text-center text-text-white-complementary md:block">
            @PixeltoPixel {new Date().getFullYear()}
          </span>

          <ButtonBackToTop />
        </div>
      </div>
    </footer>
  )
}
