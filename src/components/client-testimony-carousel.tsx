'use client'

import Image from 'next/image'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel'
import { Quotes } from '@/assets/quotes'
import { useEffect, useState } from 'react'
import { Progress } from './ui/progress'

export function ClientTestimonyCarousel() {
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
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="space-y-3">
                <Quotes />
                <p className="select-none text-xl font-medium md:text-2xl">
                  Este é um projeto de plataforma que permite aos usuários tanto
                  se candidatarem a projetos existentes quanto criarem seus
                  próprios projetos para recrutar colaboradores.
                </p>

                <div className="flex items-center gap-5 pt-[1.875rem]">
                  <div className="size-11.5 bg-[#D9D9D9]">
                    <Image
                      width={50}
                      height={50}
                      src="https://github.com/brunosllz.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="block select-none font-medium leading-tight md:text-lg">
                      Nome cliente
                    </span>
                    <span className="block select-none text-sm leading-tight text-text-dark-secondary md:text-base">
                      Função e nome da empresa
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="space-y-4">
        <Progress value={current} max={count} />

        <div>
          <span className="text-sm font-medium leading-none text-text-dark-primary md:text-base">
            {current}
          </span>
          <span className="text-sm font-medium leading-none text-text-white-tertiary md:text-base">
            /{count}
          </span>
        </div>
      </div>
    </div>
  )
}
