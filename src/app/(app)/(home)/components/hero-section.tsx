import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'
import { SOCIAL_MEDIA_LINKS } from '@/utils/constants'

export function HeroSection() {
  return (
    <section className="w-full bg-background-dark">
      <div className="mx-auto w-full max-w-container space-y-10.5 px-5 pb-16 pt-10.5 md:px-8 md:pt-14 lg:space-y-16 lg:px-5 lg:py-28">
        <h1 className="text-[2.125rem] font-medium leading-tight text-text-white-primary md:text-[2.625rem] lg:text-[4.25rem]">
          Transformando ideias em experiências visuais cativantes,{' '}
          <span className="text-[2.125rem] leading-tight text-text-white-tertiary md:text-[2.625rem] lg:text-[4.25rem]">
            nosso design encanta, conecta e simplifica
          </span>
        </h1>

        <Separator className="bg-text-dark-secondary" />

        <div className="space-y-10.5 lg:flex lg:items-start lg:justify-between lg:space-y-0">
          <p className="text-xl font-light text-text-white-secondary lg:max-w-[37rem] ">
            Conexões Intuitivas, Experiências Encantadoras: A Maestria do Design
            em Movimento e Impacto Visual
          </p>

          <Button size={{ md: 'lg' }} className="w-full md:max-w-max" asChild>
            <Link href="/contato">
              <span>
                Entrar em contato <ArrowRight size={24} />
              </span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-5 md:gap-4 lg:max-w-[36.25rem] lg:gap-8">
          {SOCIAL_MEDIA_LINKS.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary hover:bg-effect-white-hover"
              target="_blank"
            >
              <Icon />

              <span className="sr-only md:not-sr-only">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
