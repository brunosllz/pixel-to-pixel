import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'

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

        <Button>Agende uma conversa sem compromisso.</Button>
      </div>

      <form className="w-full pt-8">
        <Input placeholder="Seu nome" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Whatsapp" />
        <Input placeholder="Nome da empresa" />
        <Input placeholder="Nome da empresa" />
        <Input placeholder="Link do seu site" />

        <Textarea placeholder="Conte-nos sobre o projeto" />

        <Input placeholder="Link dos concorrentes" />

        <Button>
          Enviar proposta <ArrowRight size={20} />
        </Button>

        <span>*Retornamos em até 48 horas</span>
      </form>
    </div>
  )
}
