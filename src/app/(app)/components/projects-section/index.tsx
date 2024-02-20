import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { FigmaButton } from '@/assets/figma-button'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '../../page'

export function ProjectsSection({ projects }: { projects: Project[] }) {
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
              <div className="relative h-[11.25rem] w-full overflow-hidden bg-[#D9D9D9]">
                <Image
                  fill
                  sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
                  src={project.homeBanner}
                  alt="Picture of the author"
                  className="object-cover"
                  quality={100}
                />
              </div>

              <h3 className="text-lg font-semibold">{project.name}</h3>

              <p className="mb-2 text-text-dark-secondary">
                {project.description}
              </p>

              <Button size="sm" variant="outlined-primary" asChild>
                <Link href={`/projeto/${project.slug}`}>
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

                  <Button size="sm" variant="outlined-primary" asChild>
                    <Link href={`/projeto/${project.slug}`}>
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

              <div className="relative col-span-2 h-[11.25rem] w-full overflow-hidden bg-[#D9D9D9] md:h-[17.5rem] lg:h-[30rem]">
                <Image
                  fill
                  sizes="(min-width: 768px) 704px, (min-width: 1024px) 1216px, 335px"
                  src={project.homeBanner}
                  alt="Picture of the author"
                  className="h-full w-full object-cover"
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
