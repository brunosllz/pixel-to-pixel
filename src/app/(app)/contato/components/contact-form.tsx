'use client'

import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { useController, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'

import { Button } from '@/components/ui/button'
import { InputControl, InputLabel, InputRoot } from '@/components/ui/input'

import { Browsers } from '@/assets/browsers'
import { Devices } from '@/assets/devices'
import { MobileDevice } from '@/assets/mobile-device'
import { ArrowRight } from 'lucide-react'

const ToggleGroup = dynamic(() =>
  import('@/components/ui/toggle-group').then((mod) => {
    return {
      default: mod.ToggleGroup,
    }
  }),
)

const ToggleGroupItem = dynamic(() =>
  import('@/components/ui/toggle-group').then((mod) => {
    return {
      default: mod.ToggleGroupItem,
    }
  }),
)

const sendContactForm = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  phone: z.string().min(15),
  businessName: z.string().min(2),
  type: z.string().min(1),
  linkWebsite: z.string().url(),
  about: z.string().min(1),
})

type SendContactForm = z.infer<typeof sendContactForm>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isValid },
    watch,
  } = useForm<SendContactForm>({
    resolver: zodResolver(sendContactForm),
    defaultValues: {
      type: '',
    },
  })

  const {
    field: { onChange, value, ref },
  } = useController<SendContactForm>({
    name: 'type',
    control,
  })

  function maskPhoneInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    const maskedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(\d{4})(\d)/, '$1$2')

    setValue('phone', maskedValue)
  }

  async function handleSendContactForm(data: SendContactForm) {
    setIsSubmitting(true)
    try {
      const axios = (await import('axios')).default

      await axios.post('/api/contacts/send-email', {
        ...data,
      })

      router.push('/contato/agradecimento')
    } catch (error) {
      setIsSubmitting(false)
      console.error(error)
    }
  }

  return (
    <form
      className="w-full space-y-6"
      onSubmit={handleSubmit(handleSendContactForm)}
    >
      <InputRoot>
        <InputControl
          data-is-filled={!!watch('name')}
          id="name"
          disabled={isSubmitting}
          {...register('name')}
        />

        <InputLabel htmlFor="name"> Seu nome</InputLabel>
      </InputRoot>

      <InputRoot>
        <InputControl
          id="email"
          data-is-filled={!!watch('email')}
          disabled={isSubmitting}
          {...register('email')}
        />

        <InputLabel htmlFor="email">Email</InputLabel>
      </InputRoot>

      <InputRoot>
        <InputControl
          id="phone"
          data-is-filled={!!watch('phone')}
          maxLength={15}
          disabled={isSubmitting}
          {...register('phone', { onChange: (value) => maskPhoneInput(value) })}
        />

        <InputLabel htmlFor="phone">Whatsapp</InputLabel>
      </InputRoot>

      <InputRoot>
        <InputControl
          id="businessName"
          data-is-filled={!!watch('businessName')}
          disabled={isSubmitting}
          {...register('businessName')}
        />

        <InputLabel htmlFor="businessName">Nome da empresa</InputLabel>
      </InputRoot>

      <div className="pt-4.5">
        <label className="font-medium md:text-lg">Dados do Projeto</label>
      </div>

      <ToggleGroup
        ref={ref}
        type="single"
        value={value}
        onValueChange={onChange}
        disabled={isSubmitting}
      >
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
        <InputControl
          id="linkWebsite"
          data-is-filled={!!watch('linkWebsite')}
          disabled={isSubmitting}
          {...register('linkWebsite')}
        />

        <InputLabel htmlFor="linkWebsite">Link do seu site</InputLabel>
      </InputRoot>

      <div className="relative w-full">
        <textarea
          id="about"
          data-is-filled={!!watch('about')}
          className="focus:ring-0:hover:border-black peer h-[13.75rem] w-full appearance-none border border-border-white-secondary bg-transparent px-4 pb-[11.5px] pt-[31.5px] leading-none text-gray-900 transition-all focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus:outline-none data-[is-filled=true]:border-border-dark-primary"
          placeholder=" "
          disabled={isSubmitting}
          {...register('about')}
        />

        <label
          htmlFor="about"
          className="absolute start-4 top-5 z-10 origin-[0] -translate-y-1/2 scale-75 transform  text-black duration-300 peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#8E8E8E] peer-focus:top-5 peer-focus:-translate-y-1/2 peer-focus:scale-75 peer-focus:text-black"
        >
          Conte-nos sobre o projeto
        </label>
      </div>

      <div className="flex flex-col gap-4 pt-4.5 md:flex-row md:items-center md:justify-between">
        <Button
          variant="secondary"
          type="submit"
          disabled={isSubmitting || !isValid}
        >
          Enviar proposta <ArrowRight size={20} />
        </Button>

        <span className="text-sm text-text-white-complementary">
          *Retornamos em até 48 horas
        </span>
      </div>
    </form>
  )
}
