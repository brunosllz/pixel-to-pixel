'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import Image from 'next/image'
import { CarouselApi, CarouselItem } from '@/components/ui/carousel'
import { Quotes } from '@/assets/quotes'
import { Progress } from '@/components/ui/progress'
import { Feedback } from '@/app/actions/fetch-clients-feedbacks'

const Carousel = dynamic(() =>
  import('@/components/ui/carousel').then((mod) => ({ default: mod.Carousel })),
)

const CarouselContent = dynamic(() =>
  import('@/components/ui/carousel').then((mod) => ({
    default: mod.CarouselContent,
  })),
)

export type ClientFeedbackCarouselProps = {
  feedbacks: Feedback[]
}

export function ClientFeedbackCarousel({
  feedbacks,
}: ClientFeedbackCarouselProps) {
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
    <div className="space-y-10.5 lg:space-y-14">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {feedbacks.map((feedback) => (
            <CarouselItem key={feedback.id}>
              <div className="space-y-3 lg:space-y-4">
                <Quotes />

                <p className="select-none text-xl font-medium md:text-2xl">
                  Este é um projeto de plataforma que permite aos usuários tanto
                  se candidatarem a projetos existentes quanto criarem seus
                  próprios projetos para recrutar colaboradores.
                </p>

                <div className="flex items-center gap-5 pt-[1.875rem] lg:pt-[1.625rem]">
                  <div className="size-11.5 bg-[#D9D9D9] lg:size-14">
                    <Image
                      width={50}
                      height={50}
                      src={feedback.clientAvatarUrl}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="space-y-2">
                    <span className="block select-none font-medium leading-tight md:text-lg lg:text-xl">
                      {feedback.clientName}
                    </span>
                    <span className="block select-none text-sm leading-tight text-text-dark-secondary md:text-base lg:text-lg">
                      {feedback.clientRole}
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
