import { useEffect, useRef, useState } from 'react'

import { CarouselItem } from '@/components/ui/carousel'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

import { MobileDevice } from '@/assets/mobile-device'
import { AnotherProject } from '@/app/actions/fetch-more-projects'
import Link from 'next/link'
import { ProjectTypeIcon } from '../../../../project-type-icon'

const DURATION_IN_SECONDS = 5

export function AnotherProjectCard({
  banner,
  description,
  name,
  slug,
  type,
}: AnotherProject) {
  const progressRef = useRef<HTMLDivElement>(null)
  const [progressValue, setProgressValue] = useState(0)
  const [isShowImage, setIsShowImage] = useState(false)

  useEffect(() => {
    let timerInSeconds = 0
    let counterOfChangeImage = 0

    const timer = setInterval(() => {
      if (timerInSeconds === DURATION_IN_SECONDS) {
        timerInSeconds = 0

        if (counterOfChangeImage % 2 === 0) {
          setIsShowImage(true)
        } else {
          setIsShowImage(false)
        }

        counterOfChangeImage++
        return setProgressValue(0)
      }

      setProgressValue(
        (prev) =>
          prev + Number(progressRef.current?.offsetWidth) / DURATION_IN_SECONDS,
      )

      timerInSeconds++
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <CarouselItem>
      <Link href={`/projeto/${slug}`}>
        <div className="border border-border-white-secondary">
          <div className="md:hidden">
            <div
              ref={progressRef}
              className="h-1 w-full bg-border-white-secondary"
            >
              <div
                style={{ width: progressValue }}
                className="h-full bg-background-dark transition-all duration-700"
              />
            </div>

            <div className="group relative flex-1 px-5 py-8">
              <p className="text-xl font-medium text-text-dark-secondary">
                {description}
              </p>

              <div
                data-is-show-image={isShowImage}
                className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 duration-300 data-[is-show-image=true]:scale-100 data-[is-show-image=true]:opacity-100"
              >
                <Image
                  fill
                  src={banner}
                  alt="Picture of the author"
                  sizes="(min-width: 768px) 596px, (min-width: 1024px) 948px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <Separator className="bg-border-white-secondary" />

            <div className="px-5 py-8 ">
              <div className="flex size-[4.5rem] items-center justify-center bg-background-white">
                <MobileDevice width={32} height={32} />
              </div>

              <span className="mt-8 block pb-2 text-left text-xl font-medium">
                {name}
              </span>
              <span className="mt-2 block text-left text-lg leading-none text-text-dark-complementary">
                {type}
              </span>
            </div>
          </div>

          <div className="relative hidden md:flex">
            <div className="min-h-[17.5rem] max-w-[18rem] space-y-8 border-r border-border-white-secondary p-6 lg:min-h-[23.75rem] lg:p-9">
              <div className="flex size-[4.5rem] items-center justify-center bg-background-white">
                <ProjectTypeIcon type={type} />
              </div>

              <div className="flex flex-col">
                <span className="text-left text-xl font-medium">{name}</span>

                <span className="mt-2 block text-left text-lg leading-none text-text-dark-complementary first-letter:uppercase">
                  {type}
                </span>
              </div>
            </div>

            <div className="group relative flex-1">
              <div className="flex h-full items-center justify-center p-6 lg:p-12">
                <p className="text-xl font-medium text-text-dark-secondary lg:text-2xl">
                  {description}
                </p>
              </div>

              <div className="absolute right-8 top-8 hidden h-[2.125rem] items-center justify-center rounded-full border border-border-white-secondary px-4 lg:flex">
                <span className="text-sm text-text-white-tertiary">
                  Mouse enter
                </span>
              </div>

              <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Image
                  fill
                  src={banner}
                  alt="Picture of the author"
                  className="object-cover"
                  sizes="(min-width: 768px) 596px, (min-width: 1024px) 948px, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </CarouselItem>
  )
}
