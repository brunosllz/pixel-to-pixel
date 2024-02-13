import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ContactForm } from './components/contact-form'

import { WhatsAppLogo } from '@/assets/whatsapp-logo'

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

        <ContactForm />
      </div>
    </div>
  )
}
