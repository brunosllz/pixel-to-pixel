import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Acknowledgment() {
  return (
    <div className="mx-auto w-full max-w-container px-5 pb-16 pt-10.5 md:flex md:flex-col md:items-center md:px-8 md:pt-14 lg:px-5 lg:pt-28">
      <h2 className="text-[1.75rem] font-semibold leading-tight md:text-center md:text-[2rem]">
        Obrigado por Compartilhar Seu Projeto Conosco
      </h2>

      <p className="mt-6 text-lg text-text-dark-secondary md:text-center md:text-xl">
        Obrigado pela Confiança em Nós! Sua proposta foi enviada com sucesso e
        estamos ansiosos para conhecer mais sobre o seu projeto. Entraremos em
        contato em breve para discutir os próximos passos.
      </p>

      <Separator className="my-8" />

      <span className="mb-10.5 block text-center text-sm font-medium md:text-base">
        Retornaremos em até 48 horas.
      </span>

      <Button
        className="w-full md:max-w-max"
        variant="outlined-secondary"
        asChild
      >
        <Link href="/">
          <span>Voltar para Home</span>
        </Link>
      </Button>
    </div>
  )
}
