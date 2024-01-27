import { BehanceLogo } from '@/assets/behance-logo'
import { DribbleLogo } from '@/assets/dribble-logo'
import { LinkedinLogo } from '@/assets/linkedin-logo'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="w-full bg-background-dark">
      <div className="mx-auto w-full max-w-container space-y-10.5 px-5 pb-16 pt-10.5 md:px-8">
        <h1 className="text-[2.125rem] font-medium text-text-white-primary md:text-[2.625rem]">
          Transformando ideias em experiências visuais cativantes,{' '}
          <span className="text-[2.125rem] text-text-white-tertiary md:text-[2.625rem]">
            nosso design encanta, conecta e simplifica
          </span>
        </h1>

        <Separator className="bg-text-dark-secondary" />

        <p className="text-xl font-light text-text-white-secondary">
          Conexões Intuitivas, Experiências Encantadoras: A Maestria do Design
          em Movimento e Impacto Visual
        </p>

        <Button size="lg" className="w-full md:max-w-max" asChild>
          <Link href="/contato">
            <span>
              Entrar em contato <ArrowRight size={24} />
            </span>
          </Link>
        </Button>

        <div className="grid grid-cols-3 gap-3">
          <Link
            href="https://www.linkedin.com/in/ui-amaurijunior/"
            className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary hover:bg-effect-white-hover"
            target="_blank"
          >
            <LinkedinLogo />
            Linkedin
          </Link>

          <Link
            href="https://www.behance.net/ui_amauri"
            className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary hover:bg-effect-white-hover"
            target="_blank"
          >
            <BehanceLogo />
            Behance
          </Link>

          <Link
            href="https://dribbble.com/amaurijunior"
            className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary hover:bg-effect-white-hover"
            target="_blank"
          >
            <DribbleLogo />
            Dribbble
          </Link>
        </div>
      </div>
    </section>
  )
}
