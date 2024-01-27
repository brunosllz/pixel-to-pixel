import { FigmaComponent } from '@/assets/figma-component'
import { NotFound404 } from '@/assets/not-found-404'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { MoreVertical, X } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-background-white">
      <header className="w-full border-b border-border-white-primary">
        <div className="mx-auto flex w-full max-w-container items-center justify-between px-5 pb-4 pt-13 md:px-8">
          <X size={24} />

          <span className="font-medium">Página não encontrada</span>

          <MoreVertical size={24} />
        </div>
      </header>

      <div className="flex flex-1">
        <div className="mx-auto flex w-full max-w-container flex-1 flex-col items-center justify-center gap-12 bg-background-grid bg-contain px-5">
          <div className="relative">
            {/* <div className="group absolute -top-11 left-8 flex size-10 gap-3 rounded-br-full rounded-tl-full rounded-tr-full bg-background-dark-secondary p-1 shadow-lg transition-all duration-500 hover:-top-[104px] hover:h-auto hover:w-auto hover:rounded-br-lg hover:rounded-tl-lg hover:rounded-tr-lg hover:px-3 hover:py-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-[#0C8CE9]">
                <span className="select-none text-sm text-text-white-primary">
                  A
                </span>
              </div>

              <div className="hidden flex-1 flex-col transition-all group-hover:flex">
                <span className="select-none font-medium text-text-white-primary">
                  Amauri Junior
                </span>
                <span className="select-none text-sm text-text-white-secondary">
                  Aqui também tem tela que inspira mas os projetos estão em
                  outro lugar.
                </span>
              </div>
            </div> */}

            <NotFound404 />
          </div>

          <div className="relative border border-brand-primary">
            <div className="absolute -top-5 left-0 flex items-center gap-2">
              <FigmaComponent className="size-4" />
              <span className="text-xs text-brand-primary">
                Button outlined
              </span>
            </div>

            <div className="absolute -left-1 -top-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -bottom-1 -left-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -right-1 -top-1 size-2 border border-brand-primary bg-background-white" />
            <div className="absolute -bottom-1 -right-1 size-2 border border-brand-primary bg-background-white" />

            <Button variant="outlined-secondary" asChild>
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
