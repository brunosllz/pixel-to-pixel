import { BehanceLogo } from '@/assets/behance-logo'
import { Broom } from '@/assets/Broom'
import { DribbleLogo } from '@/assets/dribble-logo'
import { Hammer } from '@/assets/hammer'
import { Lighting } from '@/assets/lighting'
import { LinkedinLogo } from '@/assets/linkedin-logo'
import { Puzzle } from '@/assets/puzzle'
import { Search } from '@/assets/search'

export const OUR_WAY_BUILDING_ACCORDION_ITEMS = [
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
]

export const OUR_WAY_BUILDING_ACCORDION_SECTORS = [
  {
    icon: Search,
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
    icon: Broom,
    label: 'Estilo',
  },
  {
    icon: Lighting,
    label: 'Iteração',
  },
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://www.linkedin.com/in/ui-amaurijunior/',
    icon: LinkedinLogo,
    label: 'Linkedin',
  },
  {
    href: 'https://www.behance.net/ui_amauri',
    icon: BehanceLogo,
    label: 'Behance',
  },
  {
    href: 'https://dribbble.com/amaurijunior',
    icon: DribbleLogo,
    label: 'Dribbble',
  },
]
