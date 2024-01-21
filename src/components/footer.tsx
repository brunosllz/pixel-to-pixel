import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { PixelToPixelWhiteLogo } from '@/assets/pixel-to-pixel-white-logo'

export function Footer() {
  return (
    <footer className="w-full bg-background-dark pb-6 pt-16">
      <div className="mx-auto w-full max-w-container px-5">
        <PixelToPixelWhiteLogo width={48} height={48} />

        <p className="mb-8 mt-6 text-text-white-primary">
          Da ideia à realidade, cada pixel conta uma história de excelência e
          inovação.
        </p>

        <Button className="w-full">
          Entrar em contato <ArrowRight size={20} />
        </Button>

        <div className="mt-12 grid grid-cols-3">
          <Link
            href="#"
            className="text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
          >
            Linkedin
          </Link>
          <Link
            href="#"
            className="text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
          >
            Behance
          </Link>
          <Link
            href="#"
            className="text-center text-text-white-secondary transition-colors hover:text-text-white-primary focus:underline focus:outline-none"
          >
            Dribbble
          </Link>
        </div>

        <div className="mt-10.5 space-y-8 border-t border-border-dark-secondary pt-5">
          <span className="block text-center text-sm text-text-white-complementary">
            @PixeltoPixel {new Date().getFullYear()}
          </span>

          <span className="block items-center text-center text-sm text-text-white-complementary">
            Code by:{' '}
            <span className="text-sm text-text-white-secondary">
              @desenvolvedor
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}
