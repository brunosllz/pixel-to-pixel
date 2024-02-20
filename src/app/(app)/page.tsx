import dynamic from 'next/dynamic'

import { ClientTestimonyCarousel } from './components/client-testimony-carousel'
import { HeroSection } from './components/hero-section'
import { ProjectsSection } from './components/projects-section'
import { BrandSection } from './components/brand-section'

import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'
import { GridLayoutFigma } from '@/assets/grid-layout-figma'
import { ArrowUp } from 'lucide-react'
import { CommentCursorFigma } from '@/assets/comment-cursor-figma'
import { EmphasisScreensSection } from './components/emphasis screens-section'

const ProcessSection = dynamic(() => import('./components/process-section'))

type ProjectsResponseAPI = {
  id: string
  nome: string
  descricao: string
  slug: string
  capaHome: {
    url: string
  }
}

export type Project = {
  id: string
  name: string
  description: string
  slug: string
  homeBanner: string
}

type Response = {
  data: {
    projetos: ProjectsResponseAPI[]
  }
}

type LoadHomeResponse = {
  data: {
    projects: Project[]
  }
}

async function loadHomeContent(): Promise<LoadHomeResponse> {
  const query = `
    query homeContent {
      projetos(orderBy: createdAt_ASC) {
        capaHome {
          url
        }
        id
        nome
        descricao
        slug
      }
    }  
  `

  const data = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/cls9mho2o1sro01w3m1dte5de/master',
    {
      method: 'POST',
      body: JSON.stringify({
        query,
      }),
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    },
  )

  const response: Response = await data.json()

  const { projetos } = response.data

  return {
    data: {
      projects: projetos.map((project) => ({
        id: project.id,
        name: project.nome,
        description: project.descricao,
        slug: project.slug,
        homeBanner: project.capaHome.url,
      })),
    },
  }
}

export default async function Home() {
  const { data } = await loadHomeContent()

  return (
    <div className="w-full">
      <HeroSection />

      <BrandSection />

      <ProjectsSection projects={data.projects} />

      <section
        id="o-que-fazemos"
        className="bg-background-white-secondary py-16 lg:py-28"
      >
        <div className="mx-auto w-full max-w-container space-y-10.5 px-5 md:px-8 lg:space-y-14 lg:px-5">
          <div className="flex items-end justify-between">
            <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[37.25rem] lg:text-[2.625rem] lg:leading-tight">
              Desenvolvendo Experiências Únicas
            </h2>

            <GridLayoutFigma className="hidden lg:block" />
          </div>

          <div className="space-y-8 lg:space-y-12">
            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <Devices className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Websites
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Criamos e redesenhamos websites para contar histórias visuais
                  envolventes, adaptando-se continuamente para cativar seu
                  público.
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <Browsers className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Landing Pages
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Desenvolvemos landing pages atrativas, direcionadas à
                  conversão, adaptadas para cativar seu público e impulsionar
                  ações.
                </p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4 lg:flex lg:gap-5 lg:space-y-0">
              <div className="flex size-16 items-center justify-center bg-background-white pb-2 md:size-[4.25rem] lg:size-[4.5rem]">
                <MobileDevice className="size-[1.7775rem] md:size-[1.875rem] lg:size-8" />
              </div>

              <div className="space-y-2 md:space-y-4 lg:flex lg:flex-1 lg:flex-col lg:items-start lg:space-y-2">
                <h3 className="text-xl font-medium text-text-dark-secondary md:text-[1.375rem] lg:text-2xl">
                  Apps
                </h3>

                <p className="text-text-dark-complementary md:text-lg lg:text-xl">
                  Desenvolvemos apps cativantes, centrados na experiência do
                  usuário, combinando usabilidade e inovação para superar
                  expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section
        id="feedbacks"
        className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:px-8 lg:space-y-14 lg:px-5 lg:py-28"
      >
        <div className="flex items-end justify-between">
          <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
            Experiências dos Nosso Clientes
          </h2>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex h-14 w-[18.5rem] items-center justify-between rounded-md bg-brand-primary px-4 py-2 pl-5">
              <span className="relative pl-2 text-sm text-text-white-secondary before:absolute before:left-0 before:top-1/2 before:h-4.5 before:w-0.5 before:-translate-y-1/2 before:animate-blinking-hand before:bg-text-white-primary">
                Add comentário
              </span>

              <div className="rounded-full bg-background-white p-1.5">
                <ArrowUp
                  size={18}
                  strokeWidth={3}
                  className="text-brand-primary"
                />
              </div>
            </div>

            <CommentCursorFigma />
          </div>
        </div>

        <ClientTestimonyCarousel />
      </section>

      <EmphasisScreensSection />
    </div>
  )
}
