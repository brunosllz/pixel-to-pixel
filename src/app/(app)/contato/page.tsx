import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'
import { WhatsAppLogo } from '@/assets/whatsapp-logo'
import { Button } from '@/components/ui/button'
import { InputControl, InputLabel, InputRoot } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contato',
}

export default function Contact() {
  return (
    <div className="mx-auto w-full max-w-container px-5 pb-16 pt-10.5 md:px-8 md:pt-14 lg:grid lg:grid-cols-[minmax(19.5rem,32rem)_minmax(34.75rem,1fr)] lg:gap-28 lg:px-5 lg:py-28">
      <div className="space-y-6 pb-8 md:pb-14">
        <h2 className="text-[1.75rem] font-semibold leading-tight md:max-w-[26.25rem] md:text-[2rem]">
          Trasnforme Suas Ideias em Pixels
        </h2>

        <p className="pb-4.5 text-lg font-medium md:pb-2 md:pt-4.5 md:text-xl">
          Conte-nos sobre o seu projeto! Queremos saber as suas ideias e
          objetivos para podermos ajudar a torná-los realidade.
        </p>

        <Link
          href="https://wa.me/5532984816534"
          target="_blank"
          className="flex items-start gap-3 border border-border-white-secondary p-4 hover:border-black focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus-visible:outline-none focus-visible:ring-0 lg:max-w-[24rem]"
        >
          <div className="flex size-13 items-center justify-center bg-background-white-secondary">
            <WhatsAppLogo className="size-6" />
          </div>

          <div className="flex-1">
            <span className="block text-sm text-text-white-complementary">
              Tem alguma dúvida?
            </span>
            <span className="mt-2 block font-medium">
              Agende uma conversa sem compromisso.
            </span>
          </div>
        </Link>
      </div>

      <Separator className="hidden bg-border-white-primary md:block lg:hidden" />

      <div className="space-y-6 pt-8 md:pt-14 lg:pt-0">
        <span className="block font-medium md:text-lg">Dados pessoais</span>

        <form className="w-full space-y-6">
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

          <div className="pt-4.5">
            <label className="font-medium md:text-lg">Dados do Projeto</label>
          </div>

          <ToggleGroup type="single">
            <ToggleGroupItem value="website" size={{ md: 'md' }}>
              <Devices className="size-6 text-text-white-complementary transition-colors group-data-[state=on]:text-background-white" />
              <span className="truncate">Website</span>
            </ToggleGroupItem>

            <ToggleGroupItem value="landing-page" size={{ md: 'md' }}>
              <Browsers className="size-6 text-text-white-complementary transition-colors group-data-[state=on]:text-background-white" />
              <span className="truncate">Landing Page</span>
            </ToggleGroupItem>

            <ToggleGroupItem value="app" size={{ md: 'md' }}>
              <MobileDevice className="size-6 text-text-white-complementary transition-colors group-data-[state=on]:text-background-white" />
              <span className="truncate">Aplicativo</span>
            </ToggleGroupItem>
          </ToggleGroup>

          <InputRoot>
            <InputControl id="link-web-site" />

            <InputLabel htmlFor="link-web-site">Link do seu site</InputLabel>
          </InputRoot>

          <div className="relative w-full">
            <textarea
              id="about"
              className="peer h-[13.75rem] w-full appearance-none border border-border-white-secondary bg-transparent px-4 pb-[11.5px] pt-[31.5px] leading-none text-gray-900 transition-all hover:border-black focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus:outline-none focus:ring-0"
              placeholder=" "
            />

            <label
              htmlFor="about"
              className="absolute start-4 top-5 z-10 origin-[0] -translate-y-1/2 scale-75 transform text-black duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#8E8E8E] peer-focus:top-5 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-black"
            >
              Conte-nos sobre o projeto
            </label>
          </div>

          <div className="flex flex-col gap-4 pt-4.5 md:flex-row md:items-center md:justify-between">
            <Button variant="secondary" disabled>
              Enviar proposta <ArrowRight size={20} />
            </Button>

            <span className="text-sm text-text-white-complementary">
              *Retornamos em até 48 horas
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
