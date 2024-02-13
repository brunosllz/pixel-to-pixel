import { FigmaChatCircle } from '@/assets/figma-chat-circle'
import { FigmaCirclesThreePlus } from '@/assets/figma-circles-three-plus'
import { FigmaComponent } from '@/assets/figma-component'
import { FigmaCursor } from '@/assets/figma-cursor'
import { FigmaHand } from '@/assets/figma-hand'
import { FigmaLogo } from '@/assets/figma-logo'
import { FigmaOptionsHeader } from '@/assets/figma-options-header'
import { FigmaPen } from '@/assets/figma-pen'
import { FigmaSquare } from '@/assets/figma-square'
import { FigmaText } from '@/assets/figma-text'
import { NotFound404 } from '@/assets/not-found-404'
import { NotFound404Large } from '@/assets/not-found-404-large'
import { Button } from '@/components/ui/button'
import { ChevronDown, MoreVertical, X } from 'lucide-react'
import Link from 'next/link'

const FIGMA_ITEMS = [
  {
    name: 'FigmaLogo',
    component: FigmaLogo,
  },
  {
    name: 'FigmaCursor',
    component: FigmaCursor,
  },
  {
    name: 'FigmaSquare',
    component: FigmaSquare,
  },
  {
    name: 'FigmaPen',
    component: FigmaPen,
  },
  {
    name: 'FigmaText',
    component: FigmaText,
  },
  {
    name: 'FigmaCirclesThreePlus',
    component: FigmaCirclesThreePlus,
  },
  {
    name: 'FigmaHand',
    component: FigmaHand,
  },
  {
    name: 'FigmaChatCircle',
    component: FigmaChatCircle,
  },
]

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-background-white">
      <header className="w-full border-b border-border-white-primary">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 pb-4 pt-13 md:px-8 lg:px-8 desktop:py-0">
          <X size={24} className="desktop:hidden" />

          <div className="hidden h-[5.5rem] desktop:flex">
            {FIGMA_ITEMS.map(({ component: Icon, name }) => {
              const isSelected = name === 'FigmaPen'

              return (
                <div
                  key={name}
                  data-is-selected={isSelected}
                  className="flex h-full items-center justify-center px-2.5 hover:bg-background-white-secondary data-[is-selected=true]:bg-[#0C8CE9]"
                >
                  <Icon />
                </div>
              )
            })}
          </div>

          <div className="inline-flex items-center">
            <span className="hidden font-medium text-text-dark-complementary lg:text-lg desktop:flex">
              Drafts
              <span className="ml-1.5 hidden font-medium text-text-white-tertiary lg:flex lg:text-lg">
                /
              </span>
            </span>

            <span className="ml-1.5 font-medium lg:text-lg">
              Página não encontrada
            </span>

            <ChevronDown
              size={12}
              className="ml-2 hidden text-background-dark lg:block"
              strokeWidth={2.5}
            />
          </div>

          <FigmaOptionsHeader className="hidden desktop:block" />

          <MoreVertical size={24} className="desktop:hidden" />
        </div>
      </header>

      <div className="flex flex-1 cursor-figma">
        <div className="mx-auto flex w-full max-w-container flex-1 flex-col items-center justify-center gap-12 bg-background-grid bg-contain px-5 desktop:gap-16">
          <div className="relative">
            <div className="group absolute -top-11 left-8 flex size-10 gap-3 rounded-br-full rounded-tl-full rounded-tr-full bg-background-dark-secondary p-1 shadow-lg transition-[border-radius] duration-0 hover:-top-[104px] hover:h-auto hover:w-auto hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-tr-lg hover:px-3 hover:py-2 desktop:left-12">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#0C8CE9]">
                <span className="select-none text-sm text-text-white-primary">
                  A
                </span>
              </div>

              <div className="hidden flex-1 flex-col transition-all group-hover:flex">
                <span className="select-none font-medium text-text-white-primary">
                  Amauri Junior
                </span>
                <span className="max-w-72 select-none text-sm text-text-white-secondary">
                  Aqui também tem tela que inspira mas os projetos estão em
                  outro lugar.
                </span>
              </div>
            </div>

            <NotFound404 className="desktop:hidden" />
            <NotFound404Large className="hidden desktop:block" />
          </div>

          <div className="group relative border border-brand-primary">
            <span className="absolute -top-5 left-0 inline-flex items-center gap-2 text-xs text-brand-primary">
              <FigmaComponent className="size-4" />
              Button outlined{' '}
              <span className="hidden transition-transform duration-300 lg:flex lg:group-hover:hidden">
                - Default
              </span>
              <span className="hidden transition-transform duration-300 lg:group-hover:flex">
                - Hover
              </span>
            </span>

            <div className="absolute -left-1 -top-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -bottom-1 -left-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -right-1 -top-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -bottom-1 -right-1 size-2 border border-brand-primary bg-background-white" />

            <Button
              variant="outlined-secondary"
              className="hover:cursor-figma"
              asChild
            >
              <Link href="/">
                <span>Voltar para Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
