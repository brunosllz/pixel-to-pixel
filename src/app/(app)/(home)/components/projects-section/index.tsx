import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { FigmaButton } from '@/assets/figma-button'
import { ArrowUpRight, Settings } from 'lucide-react'
import { fetchHomeProjects } from '@/app/actions/fetch-home-projects'

export async function ProjectsSection() {
  const { projects } = await fetchHomeProjects()

  return (
    <section
      id="projetos"
      className="mx-auto w-full max-w-container space-y-2.5 px-5 pb-16 pt-14 md:px-8 lg:space-y-14 lg:px-5 lg:py-28"
    >
      <div className="flex items-end justify-between">
        <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[37.25rem] lg:text-[2.625rem] lg:leading-tight">
          Projetos que Inspiram e Transformam
        </h2>

        <FigmaButton className="hidden lg:block" />
      </div>

      <div className="space-y-8 divide-y-2 divide-border-white-primary md:space-y-10.5 lg:space-y-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-background-white lg:first:border-t-2 lg:first:border-border-white-primary"
          >
            <div className="flex flex-col gap-4 pt-8 md:hidden">
              <div className="relative h-[15rem] w-full overflow-hidden bg-[#D9D9D9]">
                {project.status === 'inProgress' && (
                  <div className="absolute left-2 top-2 z-10 flex items-center gap-1 bg-white p-2">
                    <Settings className="size-4" />

                    <span className="text-xs">Em construção</span>
                  </div>
                )}

                <Image
                  fill
                  sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
                  src={project.homeBannerUrl}
                  alt={project.name}
                  data-in-progress={project.status === 'inProgress'}
                  className="object-cover data-[in-progress=true]:saturate-0"
                  quality={100}
                />
              </div>

              <h3 className="text-lg font-semibold">{project.name}</h3>

              <p className="mb-2 text-text-dark-secondary">
                {project.description}
              </p>

              <Button
                size="sm"
                variant="outlined-primary"
                asChild
                disabled={project.status === 'inProgress'}
              >
                <Link
                  href={`/projeto/${project.slug}`}
                  data-disabled={project.status === 'inProgress'}
                  className="data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
                >
                  <span>
                    Ver projeto <ArrowUpRight size={18} />
                  </span>
                </Link>
              </Button>
            </div>

            <div className="hidden md:flex md:flex-col md:gap-6 md:pt-10.5 lg:gap-10.5 lg:pt-16">
              <div className="flex justify-between gap-9">
                <div className="space-y-9 lg:space-y-13">
                  <h3 className="text-lg font-semibold">{project.name}</h3>

                  <Button
                    size="sm"
                    variant="outlined-primary"
                    asChild
                    disabled={project.status === 'inProgress'}
                  >
                    <Link
                      href={`/projeto/${project.slug}`}
                      data-disabled={project.status === 'inProgress'}
                      className="data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
                    >
                      <span>
                        Ver projeto <ArrowUpRight size={18} />
                      </span>
                    </Link>
                  </Button>
                </div>

                <p className="max-w-[26.25rem] text-text-dark-secondary lg:max-w-[50rem] lg:text-2xl">
                  {project.description}
                </p>
              </div>

              <div className="relative col-span-2 h-[15rem] w-full overflow-hidden bg-[#D9D9D9] md:h-[17.5rem] lg:h-[30rem]">
                {project.status === 'inProgress' && (
                  <div className="absolute left-4 top-4 z-10 flex items-center gap-1 bg-white p-3">
                    <Settings className="size-5" />

                    <span className="text-sm font-medium md:text-base">
                      Em construção
                    </span>
                  </div>
                )}

                <Image
                  fill
                  sizes="(min-width: 768px) 100vw, (min-width: 1024px) 1216px, 100vw"
                  src={project.homeBannerUrl}
                  alt={project.name}
                  data-in-progress={project.status === 'inProgress'}
                  className="object-cover data-[in-progress=true]:saturate-0"
                  quality={100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
