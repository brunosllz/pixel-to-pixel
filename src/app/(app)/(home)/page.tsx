import dynamic from 'next/dynamic'

import { HeroSection } from './components/hero-section'
import { ProjectsSection } from './components/projects-section'
import { BrandSection } from './components/brand-section'

import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'
import { GridLayoutFigma } from '@/assets/grid-layout-figma'

import { HighlightScreensSection } from './components/highlight-screens-section'
import { ClientFeedbackSection } from './components/client-feedback-section'

const OurWayBuildingSection = dynamic(() =>
  import('./components/our-way-building-section').then((mod) => ({
    default: mod.OurWayBuildingSection,
  })),
)

export default async function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <BrandSection />
      <ProjectsSection />

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

      <OurWayBuildingSection />
      <ClientFeedbackSection />
      <HighlightScreensSection />
    </div>
  )
}
