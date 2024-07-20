import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'

import { Devices } from '@/assets/devices'
import { GetProjectDetails } from '@/app/actions/get-project-details'
import { ProjectTypeIcon } from './components/project-type-icon'

import { MoreProjectsSection } from './components/more-projects-section'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Projeto',
}

export default async function Project({
  params,
}: {
  params: { slug: string }
}) {
  const { projectDetails } = await GetProjectDetails({
    slug: params.slug,
  })

  if (projectDetails.status === 'inProgress') {
    return notFound()
  }

  return (
    <div className="w-full">
      <section className="w-full bg-background-dark">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 pt-10.5 md:px-8 md:pt-14 lg:space-y-16 lg:px-5 lg:pt-28">
          <div className="space-y-5 xl:flex xl:justify-between xl:space-y-0">
            <div className="xl:flex xl:flex-col xl:justify-between">
              <h1 className="text-3xl font-medium leading-loose text-text-white-primary md:text-4xl xl:max-w-[24rem] xl:text-[2.625rem]">
                {projectDetails.name}
              </h1>

              <div className="hidden items-center gap-5 xl:flex">
                <ProjectTypeIcon type={projectDetails.type} />

                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium text-text-white-secondary first-letter:uppercase">
                    {projectDetails.type}
                  </span>
                  <span className="leading-none text-text-white-complementary">
                    {projectDetails.roleRealized}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-5 xl:max-w-[43.5rem] xl:space-y-8">
              <p className="pb-3 text-xl text-text-white-primary lg:pb-0 lg:text-2xl">
                {projectDetails.description}
              </p>

              <Link
                href="https://devxperience.app/"
                target="_blank"
                className="flex items-center gap-2 text-text-white-secondary transition-colors hover:text-text-white-primary"
              >
                Acessar Website <ArrowUpRight />
              </Link>
            </div>
          </div>

          <Separator className="bg-border-dark-secondary" />

          <div className="flex items-center gap-5 xl:hidden">
            <ProjectTypeIcon type={projectDetails.type} />

            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium text-text-white-secondary">
                {projectDetails.type}
              </span>
              <span className="text-sm leading-none text-text-white-complementary">
                {projectDetails.roleRealized}
              </span>
            </div>
          </div>

          <div className="relative h-[15rem] w-full bg-[#D9D9D9] md:h-[26.25rem] lg:h-[38.75rem]">
            <Image
              src={projectDetails.banner}
              alt={projectDetails.name}
              fill
              sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
              priority
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-8 px-5 pb-8 pt-16 md:px-8 lg:flex lg:items-start lg:justify-between lg:space-y-0 lg:px-5 lg:pb-14 lg:pt-28">
        <div className="space-y-10.5 lg:sticky lg:top-14 lg:mr-8 lg:space-y-8 ">
          <h2 className="text-[1.75rem] font-semibold leading-tight md:min-w-[17.5rem] md:max-w-[26.25rem] md:text-[2rem] xl:text-[2.625rem]">
            Destaques da Entrega
          </h2>

          <p className="text-lg font-medium text-text-dark-secondary md:text-xl lg:hidden">
            {projectDetails.commentAbout}
          </p>

          <div className="hidden space-y-2 lg:block lg:max-w-[11rem]">
            <span className="block text-text-white-complementary">Data</span>

            <Separator />

            <span className="block text-lg font-medium text-text-dark-secondary">
              Out 2023
            </span>
          </div>
        </div>

        <div className="space-y-8 lg:max-w-[43.5rem] lg:space-y-12">
          <p className="hidden text-lg font-medium text-text-dark-secondary md:text-xl lg:block lg:leading-relaxed xl:text-2xl">
            {projectDetails.commentAbout}
          </p>

          <Separator />

          <div className="space-y-6 lg:space-y-8">
            <p className="cl:text-2xl text-lg font-medium leading-relaxed text-text-dark-secondary md:text-xl">
              “{projectDetails.clientFeedback}”
            </p>

            <div className="flex items-center gap-5">
              <div className="size-11.5 bg-[#D9D9D9] xl:size-13">
                {projectDetails.clientAvatarUrl && (
                  <Image
                    src={projectDetails.clientAvatarUrl}
                    alt=""
                    width={50}
                    height={50}
                    className="size-full object-cover"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-medium leading-tight text-text-dark-primary md:text-lg">
                  {projectDetails.clientName}
                </span>
                <span className="text-sm leading-none text-text-dark-secondary xl:text-base">
                  {projectDetails.clientRole}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container">
        <div className="border-b border-border-white-primary px-5 pb-10.5 pt-8 md:px-8 lg:px-5 lg:pb-14 lg:pt-14">
          <div className="grid grid-cols-2 gap-5 lg:gap-6">
            <div className="relative col-span-2 h-[15rem] bg-[#D9D9D9] md:h-[23.75rem] lg:h-[37.25rem]">
              <Image
                src={projectDetails.moreImages[0].url}
                alt=""
                fill
                sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="relative col-span-2 h-[15rem] bg-[#D9D9D9] md:col-span-1 md:h-[17.5rem] lg:h-[30rem]">
              <Image
                src={projectDetails.moreImages[1].url}
                alt=""
                fill
                sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="relative col-span-2 h-[15rem] bg-[#D9D9D9] md:col-span-1 md:h-[17.5rem] lg:h-[30rem]">
              <Image
                src={projectDetails.moreImages[2].url}
                alt=""
                fill
                sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-8 px-5 pb-16 pt-10.5 md:px-8 lg:px-5 lg:pb-28 lg:pt-14">
        <div className="flex items-center gap-3">
          <div className="flex size-[3.25rem] items-center justify-center bg-background-white-secondary md:size-14 lg:size-16">
            <Devices className="size-[1.421875rem] md:size-6 lg:size-7" />
          </div>

          <h2 className="text-lg font-medium lg:text-xl">Resultado Final</h2>
        </div>

        <div className="grid-cols grid gap-5 lg:gap-6">
          <div className="relative col-span-2 h-[15rem] w-full bg-[#D9D9D9] md:h-[23.75rem] lg:h-[37.25rem]">
            <Image
              src={projectDetails.moreImages[3].url}
              alt=""
              fill
              sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[15rem] w-full bg-[#D9D9D9] md:col-span-1 md:h-[16.25rem] lg:h-[30rem]">
            <Image
              src={projectDetails.moreImages[4].url}
              alt=""
              fill
              sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[15rem] w-full bg-[#D9D9D9] md:col-span-1 md:h-[16.25rem] lg:h-[30rem]">
            <Image
              src={projectDetails.moreImages[5].url}
              alt=""
              fill
              sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[16.5rem] w-full bg-[#D9D9D9] md:h-[23.75rem] lg:h-[60rem]">
            <Image
              src={projectDetails.moreImages[6].url}
              alt=""
              fill
              sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[15rem] w-full bg-[#D9D9D9] md:col-span-1 md:h-[16.25rem] lg:h-[30rem]">
            <Image
              src={projectDetails.moreImages[7].url}
              alt=""
              fill
              sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[15rem] w-full bg-[#D9D9D9] md:col-span-1 md:h-[16.25rem] lg:h-[30rem]">
            <Image
              src={projectDetails.moreImages[8].url}
              alt=""
              fill
              sizes="(min-width: 768px) 424px, (min-width: 1024px) 596px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>

          <div className="relative col-span-2 h-[31.25rem] w-full bg-[#D9D9D9] md:h-[46.25rem] lg:h-[100rem]">
            <Image
              src={projectDetails.moreImages[9].url}
              alt=""
              fill
              sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
              className="object-cover"
              quality={100}
            />
          </div>
        </div>
      </section>

      <MoreProjectsSection slug={params.slug} />
    </div>
  )
}
