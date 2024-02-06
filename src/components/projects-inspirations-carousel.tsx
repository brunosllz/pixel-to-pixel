'use client'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress'
import { Separator } from './ui/separator'
import { MobileDevice } from '@/assets/mobile-device'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

export function ProjectsInspirationsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="space-y-10.5">
      <Carousel setApi={setApi}>
        <div className="space-y-8">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="border border-border-white-secondary">
                  <div className="md:hidden">
                    <div className="px-5 py-8">
                      <p className="text-xl font-medium text-text-dark-secondary">
                        Este é um projeto de plataforma que permite aos usuários
                        tanto se candidatarem a projetos existentes quanto
                        criarem seus próprios projetos para recrutar
                        colaboradores.
                      </p>
                    </div>

                    <Separator className="bg-border-white-secondary" />

                    <div className="space-y-8 px-5 py-8">
                      <div className="flex size-[4.5rem] items-center justify-center bg-background-white">
                        <MobileDevice width={32} height={32} />
                      </div>

                      <span className="block pb-2 text-xl font-medium">
                        Estante Otaku
                      </span>
                      <span className="text-lg leading-none text-text-dark-complementary">
                        App
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex">
                    <div className="min-h-[17.5rem] max-w-[18rem] space-y-8 border-r border-border-white-secondary p-6 lg:min-h-[23.75rem] lg:p-12">
                      <div className="flex size-[4.5rem] items-center justify-center bg-background-white">
                        <MobileDevice width={32} height={32} />
                      </div>

                      <div>
                        <span className="line-clamp-1 text-xl font-medium">
                          Estante Otaku
                        </span>

                        <span className="mt-2 block text-lg leading-none text-text-dark-complementary">
                          App
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center space-y-8 p-6 lg:p-12">
                      <p className="text-xl font-medium text-text-dark-secondary lg:text-2xl">
                        Este é um projeto de plataforma que permite aos usuários
                        tanto se candidatarem a projetos existentes quanto
                        criarem seus próprios projetos para recrutar
                        colaboradores.
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="space-y-4">
            <Progress value={current} max={count} />

            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium leading-none text-text-dark-primary">
                  {current}
                </span>
                <span className="text-sm font-medium leading-none text-text-white-tertiary">
                  /{count}
                </span>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="icon"
                  size="icon"
                  onClick={() => {
                    api?.scrollPrev()
                  }}
                >
                  <ArrowLeft />
                  <span className="sr-only">Slide anterior</span>
                </Button>

                <Button
                  variant="icon"
                  size="icon"
                  onClick={() => {
                    api?.scrollNext()
                  }}
                >
                  <ArrowRight />
                  <span className="sr-only">Próximo slide</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
