import { FigmaButtons } from '@/assets/figma-buttons'

import { fetchMoreProjects } from '@/app/actions/fetch-more-projects'
import { AnotherProjectsCarrousel } from './components/another-projects-carousel.tsx'

export async function MoreProjectsSection({ slug }: { slug: string }) {
  const { moreProjects } = await fetchMoreProjects({ slug })

  return (
    <section className="w-full bg-background-white-secondary">
      <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:space-y-14 md:px-8 lg:px-5 lg:py-28">
        <div className="flex items-end justify-between">
          <h2 className="text-[1.75rem] font-semibold leading-tight md:max-w-[27.8125rem] md:text-[2rem]">
            Mais dos Projetos que Inspiram
          </h2>

          <FigmaButtons className="hidden lg:block" />
        </div>

        <AnotherProjectsCarrousel anotherProjects={moreProjects} />
      </div>
    </section>
  )
}
