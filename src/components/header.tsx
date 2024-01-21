import Link from 'next/link'
import { Button } from './ui/button'
import { PixelToPixelWhiteLogo } from '@/assets/pixel-to-pixel-white-logo'

export function Header() {
  return (
    <header className="w-full bg-background-dark pb-10.5 pt-[3.25rem] ">
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-5">
        <Link href="/">
          <PixelToPixelWhiteLogo />
        </Link>

        <Button size="sm" className="max-w-min">
          Entrar em contato
        </Button>
      </div>
    </header>
  )
}
