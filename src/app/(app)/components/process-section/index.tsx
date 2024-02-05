'use client'

import { Hammer } from '@/assets/hammer'
import { Puzzle } from '@/assets/puzzle'
import { Search } from '@/assets/search'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { useState } from 'react'

const ACCORDION_ITEMS = [
  {
    id: 'Pesquisa',
    title: 'Pesquisa',
    description: 'Compreensão Profunda e Estratégica',
    content:
      'Análises de mercado para identificar tendências e necessidades, combinadas com a compreensão detalhada das metas e requisitos do cliente para alinhar o projeto estrategicamente.',
  },
  {
    id: 'Ideação',
    title: 'Ideação',
    description: 'Geração Criativa de Ideias',
    content:
      'Sessões de brainstorming para gerar ideias inovadoras, definição de conceitos e estratégias iniciais, incorporando a coleta de inspirações por meio de moodboards para orientar a abordagem criativa do projeto.',
  },
  {
    id: 'Estruturação',
    title: 'Estruturação',
    description: 'Prototipagem e Estruturação Visual',
    content:
      'Criação de wireframes e protótipos básicos para a disposição visual do layout, além do desenvolvimento de protótipos interativos para testar funcionalidade e usabilidade.',
  },
  {
    id: 'Estilo',
    title: 'Estilo',
    description: 'Desenvolvimento Estético e Visual',
    content:
      'Foco na identidade visual do projeto, incluindo a criação da paleta de cores, tipografia e elementos visuais alinhados à estética planejada.',
  },
  {
    id: 'Iteração',
    title: 'Iteração',
    description: 'Ajustes Iterativos e Feedback',
    content:
      'Coleta contínua de feedback do cliente para ajustes e iterações, refinando o design com foco na satisfação e nos requisitos do cliente.',
  },
  {
    id: 'Desenvolvimento',
    title: 'Desenvolvimento',
    description: 'Viabilidade e Implementação ',
    content:
      'Colaboração estreita com a equipe de desenvolvimento para garantir a viabilidade técnica e a entrega de diretrizes claras para a implementação do design.',
  },
]

const ACCORDION_SECTORS = [
  {
    icon: Hammer,
    label: 'Pesquisa',
  },
  {
    icon: Puzzle,
    label: 'Ideação',
  },
  {
    icon: Hammer,
    label: 'Estruturação',
  },
  {
    icon: Puzzle,
    label: 'Pesquisa',
  },
  {
    icon: Hammer,
    label: 'Pesquisa',
  },
  {
    icon: Hammer,
    label: 'Pesquisa',
  },
]

export default function ProcessSection() {
  const [selectedAccordion, setSelectedAccordion] = useState<string>()

  return (
    <section id="processos" className="w-full bg-background-dark">
      <div className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:px-8 lg:px-5 lg:py-28">
        <div className="flex items-end justify-between">
          <h2 className="text-[1.75rem] font-semibold text-text-white-primary md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
            Nossa Maneira de Construir
          </h2>

          <div className="hidden gap-px lg:flex lg:items-center">
            {ACCORDION_SECTORS.map(({ icon: Icon, label }) => {
              const isSelected = selectedAccordion === label

              return (
                <button
                  data-is-selected={isSelected}
                  key={label}
                  className="group relative flex size-16 items-center justify-center border border-border-dark-secondary outline-none transition-colors focus-visible:z-10 focus-visible:ring-1 focus-visible:ring-brand-primary data-[is-selected=true]:border-brand-primary "
                  onClick={() => setSelectedAccordion(label)}
                >
                  <Icon />
                  <span className="sr-only">{label}</span>

                  <div className="absolute -left-1 -top-1 z-10 hidden size-2 border border-brand-primary bg-background-white group-data-[is-selected=true]:block" />
                  <div className="absolute -bottom-1 -left-1 z-10 hidden size-2 border border-brand-primary bg-background-white group-data-[is-selected=true]:block" />
                  <div className="absolute -right-1 -top-1 z-10 hidden size-2 border border-brand-primary bg-background-white group-data-[is-selected=true]:block" />
                  <div className="absolute -bottom-1 -right-1 z-10 hidden size-2 border border-brand-primary bg-background-white group-data-[is-selected=true]:block" />
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <Separator className="bg-border-white-primary" />
          <Accordion
            type="single"
            collapsible
            onValueChange={setSelectedAccordion}
            value={selectedAccordion}
          >
            {ACCORDION_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="[&_button]:last:pb-0 [&_button]:last:[&[data-state=open]]:pb-5 [&_div]:last:pb-0"
              >
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <h3 className="text-start text-xl font-medium text-text-white-primary md:text-[1.375rem] lg:text-2xl">
                      {item.title}
                    </h3>
                    <span className="text-start text-sm text-text-white-tertiary md:text-base">
                      {item.description}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <p className="text-text-white-primary md:text-lg lg:text-xl">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
