import { Button } from '@/components/ui/button'
import { InputControl, InputLabel, InputRoot } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-container px-5 pb-16">
      <div className="space-y-6 pb-8">
        <h2 className="text-[1.75rem] font-semibold leading-tight">
          Trasnforme Suas Ideias em Pixels
        </h2>

        <p className="pb-4.5 text-lg font-medium">
          Conte-nos sobre o seu projeto! Queremos saber as suas ideias e
          objetivos para podermos ajudar a torná-los realidade.
        </p>

        {/* <Button>Agende uma conversa sem compromisso.</Button> */}
      </div>

      <form className="w-full space-y-6 pt-8">
        <InputRoot>
          <InputControl id="name" />

          <InputLabel htmlFor="name"> Seu nome</InputLabel>
        </InputRoot>

        <InputRoot>
          <InputControl id="email" />

          <InputLabel htmlFor="email">Email</InputLabel>
        </InputRoot>

        <InputRoot>
          <InputControl id="phone" />

          <InputLabel htmlFor="phone">Whatsapp</InputLabel>
        </InputRoot>

        <InputRoot>
          <InputControl id="business" />

          <InputLabel htmlFor="business">Nome da empresa</InputLabel>
        </InputRoot>

        <div>
          <label className="">Dados do Projeto</label>
        </div>

        <div className="relative w-full">
          <textarea
            id="about"
            className="peer h-[13.75rem] w-full appearance-none border border-[#D9D9D9] bg-transparent px-4 pb-[11.5px] pt-[31.5px] leading-none text-gray-900 transition-all hover:border-black focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus:outline-none focus:ring-0"
            placeholder=" "
          />

          <label
            htmlFor="about"
            className="absolute start-4 top-5 z-10 origin-[0] -translate-y-1/2 scale-75 transform text-black duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#8E8E8E] peer-focus:top-5 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-black"
          >
            Conte-nos sobre o projeto
          </label>
        </div>

        <InputRoot>
          <InputControl id="link-web-site" />

          <InputLabel htmlFor="link-web-site">Link do seu site</InputLabel>
        </InputRoot>

        <div className="flex flex-col gap-4 pt-4.5">
          <Button variant="secondary">
            Enviar proposta <ArrowRight size={20} />
          </Button>

          <span className="text-sm text-text-dark-complementary">
            *Retornamos em até 48 horas
          </span>
        </div>
      </form>
    </div>
  )
}
