import { BehanceLogo } from '@/assets/behance-logo'
import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { DribbleLogo } from '@/assets/dribble-logo'
import { LinkedinLogo } from '@/assets/linkedin-logo'
import { MobileDevice } from '@/assets/mobile-device'
import { PixelToPixelDarkLogo } from '@/assets/pixel-to-pixel-dark-logo'

import { ClientTestimonyCarousel } from '@/components/client-testimony-carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ACCORDION_ITEMS = [
  {
    id: 'Pesquisa',
    title: 'Pesquisa',
    description: 'Compreensão Profunda e Estratégica',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
  {
    id: 'Ideação',
    title: 'Ideação',
    description: 'Geração Criativa de Ideias',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
  {
    id: 'Estruturação',
    title: 'Estruturação',
    description: 'Prototipagem e Estruturação Visual',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
  {
    id: 'Estilo',
    title: 'Estilo',
    description: 'Desenvolvimento Estético e Visual',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
  {
    id: 'Iteração',
    title: 'Iteração',
    description: 'Ajustes Iterativos e Feedback',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
]

export default function Home() {
  return (
    <div className="w-full">
      <section className="w-full bg-background-dark">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 pb-16 pt-10.5">
          <h1 className="text-[2.125rem] font-medium text-text-white-primary">
            Transformando ideias em experiências visuais cativantes,{' '}
            <span className="text-4xl text-text-white-tertiary">
              nosso design encanta, conecta e simplifica
            </span>
          </h1>

          <Separator className="bg-text-dark-secondary" />

          <p className="text-xl font-light text-text-white-secondary">
            Conexões Intuitivas, Experiências Encantadoras: A Maestria do Design
            em Movimento e Impacto Visual
          </p>

          <Button variant="primary" size="lg">
            Entrar em contato <ArrowRight size={24} />
          </Button>

          <div className="grid grid-cols-3 gap-3">
            <Link
              href="https://www.linkedin.com/in/ui-amaurijunior/"
              className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary"
            >
              <LinkedinLogo />
              Linkedin
            </Link>
            <Link
              href="https://www.behance.net/ui_amauri"
              className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary"
            >
              <BehanceLogo />
              Behance
            </Link>
            <Link
              href="#"
              className="flex h-[5.5rem] flex-col items-center justify-center gap-2 border border-border-dark-secondary text-text-white-secondary transition-colors hover:border-text-dark-tertiary"
            >
              <DribbleLogo />
              Dribbble
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full border-b border-border-white-primary py-8">
        <div className="mx-auto flex max-w-container items-center gap-4 px-5">
          <PixelToPixelDarkLogo width={42} height={42} />

          <p className="font-medium">Combinamos estética e funcionalidade.</p>
        </div>
      </div>

      <section className="mx-auto w-full max-w-container space-y-2.5 px-5 pb-16 pt-14">
        <h2 className="text-[1.75rem] font-semibold">
          Projetos que Inspiram e Transformam
        </h2>

        <div className="space-y-8 divide-y-2 divide-border-white-primary">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-4 pt-8">
              <div className="h-[11.25rem] w-full overflow-hidden bg-[#D9D9D9]">
                <Image
                  width={335}
                  height={180}
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                  alt="Picture of the author"
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">Dev Experience</h3>
              <p className="mb-2 text-text-dark-secondary">
                Este é um projeto de plataforma que permite aos usuários tanto
                se candidatarem a projetos existentes quanto criarem seus
                próprios projetos para recrutar colaboradores.
              </p>

              <Button size="sm">
                Ver projeto <ArrowUpRight size={18} />
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background-white-secondary py-16">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5">
          <h2 className="text-[1.75rem] font-semibold">
            Desenvolvendo Experiências Únicas
          </h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2">
                <Devices width={28.44} height={28.44} />
              </div>

              <h3 className="text-xl font-medium text-text-dark-secondary">
                Websites
              </h3>
              <p className="text-text-dark-complementary">
                Criamos e redesenhamos websites para contar histórias visuais
                envolventes, adaptando-se continuamente para cativar seu
                público.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2">
                <Browsers width={28.44} height={28.44} />
              </div>
              <h3 className="text-xl font-medium text-text-dark-secondary">
                Landing Pages
              </h3>
              <p className="text-text-dark-complementary">
                Desenvolvemos landing pages atrativas, direcionadas à conversão,
                adaptadas para cativar seu público e impulsionar ações.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2">
                <MobileDevice width={28.44} height={28.44} />
              </div>
              <h3 className="text-xl font-medium text-text-dark-secondary">
                Apps
              </h3>
              <p className="text-text-dark-complementary">
                Desenvolvemos apps cativantes, centrados na experiência do
                usuário, combinando usabilidade e inovação para superar
                expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-dark">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16">
          <h2 className="text-[1.75rem] font-semibold text-text-white-primary">
            Nossa Maneira de Construir
          </h2>

          <div>
            <Separator className="bg-border-white-primary" />
            <Accordion type="single" collapsible>
              {ACCORDION_ITEMS.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="[&_button]:last:pb-0"
                >
                  <AccordionTrigger>
                    <div className="flex flex-col items-start">
                      <h3 className="text-start text-xl font-medium text-text-white-primary">
                        {item.title}
                      </h3>
                      <span className="text-start text-sm text-text-white-tertiary">
                        {item.description}
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-text-white-primary">{item.content}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16">
        <h2 className="text-[1.75rem] font-semibold">
          Experiências dos Nosso Clientes
        </h2>

        <ClientTestimonyCarousel />
      </section>

      <section className="w-full bg-background-white-secondary">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16">
          <h2 className="text-[1.75rem] font-semibold">
            Telas de Destaque que Inspiram
          </h2>

          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
              containScroll: 'trimSnaps',
            }}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="group max-w-max saturate-0 transition-all hover:saturate-100"
                >
                  <div className="w-[13.75rem] space-y-4">
                    <div className="h-[17.5rem] w-full bg-[#D9D9D9]">
                      <Image
                        width={220}
                        height={280}
                        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                        alt=""
                        className="h-full w-full object-cover"
                        quality={100}
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="line-clamp-1 text-lg font-medium">
                        Nome do projeto no dribble
                      </span>

                      <span className="block text-text-dark-complementary">
                        @uiamauri
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  )
}
