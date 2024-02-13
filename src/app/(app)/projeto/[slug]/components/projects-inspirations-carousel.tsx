'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

import { CarouselApi } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { ProjectInspirationCard } from './project-inspiration-card'

import { ArrowLeft, ArrowRight } from 'lucide-react'

const Carousel = dynamic(() =>
  import('@/components/ui/carousel').then((mod) => ({ default: mod.Carousel })),
)

const CarouselContent = dynamic(() =>
  import('@/components/ui/carousel').then((mod) => ({
    default: mod.CarouselContent,
  })),
)

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
              <ProjectInspirationCard key={index} />
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
