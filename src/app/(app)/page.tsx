import dynamic from 'next/dynamic'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { ClientTestimonyCarousel } from '@/components/client-testimony-carousel'
import { HeroSection } from './components/hero-section'
import Image from 'next/image'
import { ProjectsSection } from './components/projects-section'
import { BrandSection } from './components/brand-section'

import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'
import { GridLayoutFigma } from '@/assets/grid-layout-figma'
import { ArrowUp } from 'lucide-react'
import { CommentCursorFigma } from '@/assets/comment-cursor-figma'

const ProcessSectionA = dynamic(() => import('./components/process-section'))

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />

      <BrandSection />

      <ProjectsSection />

      <section
        id="o-que-fazemos"
        className="bg-background-white-secondary py-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 md:px-8 lg:space-y-14 lg:px-5">
          <div className="flex items-end justify-between">
            <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[37.25rem] lg:text-[2.625rem] lg:leading-tight">
              Desenvolvendo Experiências Únicas
            </h2>

            <GridLayoutFigma className="hidden lg:block" />
          </div>

          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <Devices className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Websites
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Criamos e redesenhamos websites para contar histórias visuais
                  envolventes, adaptando-se continuamente para cativar seu
                  público.
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <Browsers className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Landing Pages
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Desenvolvemos landing pages atrativas, direcionadas à
                  conversão, adaptadas para cativar seu público e impulsionar
                  ações.
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <MobileDevice className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Apps
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Desenvolvemos apps cativantes, centrados na experiência do
                  usuário, combinando usabilidade e inovação para superar
                  expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSectionA />

      <section
        id="feedbacks"
        className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:px-8 lg:space-y-14 lg:px-5 lg:py-28"
      >
        <div className="flex items-end justify-between">
          <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
            Experiências dos Nosso Clientes
          </h2>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex h-14 w-[18.5rem] items-center justify-between rounded-md bg-brand-primary px-4 py-2 pl-5">
              <span className="relative pl-2 text-sm text-text-white-secondary before:absolute before:left-0 before:top-1/2 before:h-4.5 before:w-0.5 before:-translate-y-1/2 before:animate-blinking-hand before:bg-text-white-primary">
                Add comentário
              </span>

              <div className="rounded-full bg-background-white p-1.5">
                <ArrowUp
                  size={18}
                  strokeWidth={3}
                  className="text-brand-primary"
                />
              </div>
            </div>

            <CommentCursorFigma />
          </div>
        </div>

        <ClientTestimonyCarousel />
      </section>

      <section className="w-full bg-background-white-secondary">
        <div className="mx-auto w-full max-w-container space-y-10.5 py-16 lg:space-y-14 lg:py-28">
          <div className="flex items-end justify-between px-5 md:px-8 lg:px-5">
            <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
              Telas de Destaque que Inspiram
            </h2>

            <div className="group relative hidden max-w-[12.5rem] grid-cols-5 before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-colors before:duration-200 hover:before:bg-[rgb(0,0,0)]/80 lg:grid">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index} className="h-7 w-10 odd:bg-brand-primary" />
              ))}

              <div className="absolute left-1/2 top-1/2 hidden h-8 w-max -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border-white-primary p-2 transition-transform duration-300 group-hover:flex">
                <span className="block text-xs font-medium text-text-white-primary">
                  Escolher Imagem
                </span>
              </div>
            </div>
          </div>

          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
              containScroll: 'trimSnaps',
            }}
          >
            <CarouselContent className="mr-5 pl-5 md:mr-8 md:pl-8 lg:mr-5 lg:pl-5">
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="group max-w-max transition-all lg:saturate-0 lg:hover:saturate-100"
                >
                  <div className="w-[13.75rem] space-y-4  md:w-[15rem] lg:w-[17.5rem]">
                    <div className="h-[17.5rem] w-full bg-[#D9D9D9] md:h-[18.75rem] lg:h-[20rem]">
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
                      <span className="line-clamp-1 text-lg font-medium leading-none">
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
