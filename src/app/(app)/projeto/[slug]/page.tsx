import { Devices } from '@/assets/devices'
import { ProjectsInspirationsCarousel } from '@/components/projects-inspirations-carousel'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projeto',
}

export default function Project() {
  return (
    <div className="w-full">
      <section className="w-full bg-background-dark">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5">
          <div className="space-y-5">
            <h1 className="text-3xl font-medium text-text-white-primary">
              Dev Experience
            </h1>

            <p className="pb-3 text-xl text-text-white-primary">
              Este é um projeto de plataforma que permite aos usuários tanto se
              candidatarem a projetos existentes quanto criarem seus próprios
              projetos para recrutar colaboradores.
            </p>

            <Link
              href="#"
              className="flex items-center gap-2 text-text-white-secondary transition-colors hover:text-text-white-primary"
            >
              Acessar Website <ArrowUpRight />
            </Link>
          </div>

          <Separator className="bg-border-dark-secondary" />

          <div className="flex items-center gap-5">
            <div className="flex size-[3.25rem] items-center justify-center bg-background-white">
              <Devices width={22.75} height={22.75} />
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

          <div className="h-[13.75rem] w-full bg-[#D9D9D9]">
            <Image
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              width={335}
              height={220}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-8 px-5 pb-8 pt-16">
        <div className="space-y-10.5">
          <h2 className="text-[1.75rem] font-semibold">Destaques da Entrega</h2>

          <p className="text-lg font-medium">
            Participei ativamente na criação da interface de usuário da
            plataforma Dev Experience. Apliquei as melhores práticas de design
            para garantir uma jornada do usuário agradável, desde o acesso à
            plataforma até a conclusão dos projetos, visando tanto estética
            quanto experiência fluida.
          </p>
        </div>

        <Separator />

        <div className="space-y-6">
          <p className="text-lg font-medium text-text-dark-secondary">
            “Este é um projeto de plataforma que permite aos usuários tanto se
            candidatarem a projetos existentes quanto criarem seus próprios
            projetos para recrutar colaboradores.”
          </p>

          <div className="flex items-center gap-5">
            <div className="size-11.5 bg-[#D9D9D9]">
              <Image
                src="https://github.com/brunosllz.png"
                alt=""
                width={50}
                height={50}
                className="size-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-medium text-text-dark-primary">
                Website
              </span>
              <span className="text-sm leading-none text-text-dark-secondary">
                UI Design
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container">
        <div className="border-b border-border-white-primary px-5 pb-10.5 pt-8">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 h-[11.25rem] bg-[#D9D9D9]" />
            <div className="h-[11.25rem] bg-[#D9D9D9]" />
            <div className="h-[11.25rem] bg-[#D9D9D9]" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-container space-y-8 px-5 pb-16 pt-10.5">
        <div className="flex items-center gap-3">
          <div className="flex size-[3.25rem] items-center justify-center bg-background-white">
            <Devices width={22.75} height={22.75} />
          </div>

          <h2 className="text-lg font-semibold">Resultado Final</h2>
        </div>

        <div className="grid-cols grid gap-3">
          <div className="col-span-2 h-[11.25rem] w-full bg-[#D9D9D9]" />
          <div className="h-28 w-full bg-[#D9D9D9]" />
          <div className="h-28 w-full bg-[#D9D9D9]" />
          <div className="col-span-2 h-[22.5rem] w-full bg-[#D9D9D9]" />
        </div>
      </section>

      <section className="w-full bg-background-white-secondary">
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16">
          <h2 className="text-[1.75rem] font-semibold leading-tight">
            Mais dos Projetos que Inspiram
          </h2>

          <ProjectsInspirationsCarousel />
        </div>
      </section>
    </div>
  )
}
