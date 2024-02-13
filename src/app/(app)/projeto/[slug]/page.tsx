import { Metadata } from 'next'

import { ProjectsInspirationsCarousel } from './components/projects-inspirations-carousel'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'
import { FigmaButtons } from '@/assets/figma-buttons'
import { Devices } from '@/assets/devices'

export const metadata: Metadata = {
  title: 'Projeto',
}

export default function Project() {
  return (
    <div className="w-full">
      <section className="w-full bg-background-dark">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 pt-10.5 md:px-8 md:pt-14 lg:space-y-16 lg:px-5 lg:pt-28">
          <div className="space-y-5 xl:flex xl:items-end xl:justify-between">
            <div className="space-y-12">
              <h1 className="text-3xl font-medium leading-loose text-text-white-primary md:text-4xl lg:max-w-[24rem] lg:text-[2.625rem]">
                Dev Xperience
              </h1>

              <div className="hidden items-center gap-5 xl:flex">
                <div className="flex size-16  items-center justify-center bg-background-white">
                  <Devices className="size-7" />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xl font-medium text-text-white-secondary">
                    Website
                  </span>
                  <span className="leading-none text-text-white-complementary">
                    UI Design
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-5 xl:max-w-[43.5rem] xl:space-y-8">
              <p className="pb-3 text-xl text-text-white-primary lg:pb-0 lg:text-2xl">
                Este é um projeto de plataforma que permite aos usuários tanto
                se candidatarem a projetos existentes quanto criarem seus
                próprios projetos para recrutar colaboradores.
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
            <div className="flex size-[3.25rem] items-center justify-center bg-background-white">
              <Devices className="size-6" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-lg font-medium text-text-white-secondary">
                Website
              </span>
              <span className="text-sm leading-none text-text-white-complementary">
                UI Design
              </span>
            </div>
          </div>

          <div className="relative h-[13.75rem] w-full bg-[#D9D9D9] md:h-[26.25rem] lg:h-[38.75rem]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              fill
              sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-8 px-5 pb-8 pt-16 md:px-8 lg:flex lg:items-start lg:justify-between lg:space-y-0 lg:px-5 lg:pb-14 lg:pt-28">
        <div className="space-y-10.5 lg:mr-8 lg:space-y-8">
          <h2 className="text-[1.75rem] font-semibold leading-tight md:min-w-[17.5rem] md:max-w-[26.25rem] md:text-[2rem] xl:text-[2.625rem]">
            Destaques da Entrega
          </h2>

          <p className="text-lg font-medium text-text-dark-secondary md:text-xl lg:hidden lg:leading-relaxed">
            Participei ativamente na criação da interface de usuário da
            plataforma Dev Experience. Apliquei as melhores práticas de design
            para garantir uma jornada do usuário agradável, desde o acesso à
            plataforma até a conclusão dos projetos, visando tanto estética
            quanto experiência fluida.
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
          <p className="hidden text-lg font-medium leading-relaxed text-text-dark-secondary md:text-xl lg:block xl:text-2xl">
            Participei ativamente na criação da interface de usuário da
            plataforma Dev Experience. Apliquei as melhores práticas de design
            para garantir uma jornada do usuário agradável, desde o acesso à
            plataforma até a conclusão dos projetos, visando tanto estética
            quanto experiência fluida.
          </p>

          <Separator />

          <div className="space-y-6 lg:space-y-8">
            <p className="cl:text-2xl text-lg font-medium leading-relaxed text-text-dark-secondary md:text-xl">
              “Este é um projeto de plataforma que permite aos usuários tanto se
              candidatarem a projetos existentes quanto criarem seus próprios
              projetos para recrutar colaboradores.”
            </p>

            <div className="flex items-center gap-5">
              <div className="size-11.5 bg-[#D9D9D9] xl:size-13">
                <Image
                  src="https://github.com/brunosllz.png"
                  alt=""
                  width={50}
                  height={50}
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-medium leading-tight text-text-dark-primary md:text-lg">
                  Nome cliente
                </span>
                <span className="text-sm leading-none text-text-dark-secondary xl:text-base">
                  Função e nome da empresa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container">
        <div className="border-b border-border-white-primary px-5 pb-10.5 pt-8 md:px-8 lg:px-5 lg:pb-14 lg:pt-14">
          <div className="grid grid-cols-2 gap-3 lg:gap-6">
            <div className="relative col-span-2 h-[11.25rem] bg-[#D9D9D9] md:h-[23.75rem] lg:h-[30rem]">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                alt=""
                fill
                sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
                className="object-cover"
              />
            </div>

            <div className="relative h-[11.25rem] bg-[#D9D9D9] md:h-[13.75rem] lg:h-[30rem]">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                alt=""
                fill
                sizes="(min-width: 768px) 346px, (min-width: 1024px) 596px, 160px"
                className="object-cover"
              />
            </div>

            <div className="relative h-[11.25rem] bg-[#D9D9D9] md:h-[13.75rem] lg:h-[30rem]">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                alt=""
                fill
                sizes="(min-width: 768px) 346px, (min-width: 1024px) 596px, 160px"
                className="object-cover"
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

        <div className="grid-cols grid gap-3 lg:gap-6">
          <div className="relative col-span-2 h-[11.25rem] w-full bg-[#D9D9D9] md:h-[23.75rem] lg:h-[30rem]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              fill
              sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
              className="object-cover"
            />
          </div>

          <div className="relative h-28 w-full bg-[#D9D9D9] md:h-[13.75rem] lg:h-[30rem]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              fill
              sizes="(min-width: 768px) 346px, (min-width: 1024px) 596px, 160px"
              className="object-cover"
            />
          </div>

          <div className="relative h-28 w-full bg-[#D9D9D9] md:h-[13.75rem] lg:h-[30rem]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              fill
              sizes="(min-width: 768px) 346px, (min-width: 1024px) 596px, 160px"
              className="object-cover"
            />
          </div>

          <div className="relative col-span-2 h-[22.5rem] w-full bg-[#D9D9D9] md:h-[23.75rem] lg:h-[60rem]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              fill
              sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-background-white-secondary">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:space-y-14 md:px-8 lg:px-5 lg:py-28">
          <div className="flex items-end justify-between">
            <h2 className="text-[1.75rem] font-semibold leading-tight md:max-w-[27.8125rem] md:text-[2rem]">
              Mais dos Projetos que Inspiram
            </h2>

            <FigmaButtons className="hidden lg:block" />
          </div>

          <ProjectsInspirationsCarousel />
        </div>
      </section>
    </div>
  )
}
