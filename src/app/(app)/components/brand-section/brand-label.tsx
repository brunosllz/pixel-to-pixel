'use client'

import { useBreakpoint } from '@/hooks/use-breakpoints'

export function BrandLabel() {
  const { isMd } = useBreakpoint('md')

  return (
    <p className="font-medium">
      {isMd
        ? 'Combinamos estética e funcionalidade para criar interfaces que não só impressionam visualmente, mas também facilitam e elevam a interação do usuário.'
        : 'Combinamos estética e funcionalidade.'}
    </p>
  )
}
