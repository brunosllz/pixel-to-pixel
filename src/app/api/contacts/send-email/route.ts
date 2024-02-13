import { EmailTemplate } from '@/components/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

const sendContactFormSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  phone: z.string(),
  businessName: z.string(),
  type: z.enum(['website', 'landing-page', 'app']),
  linkWebsite: z.string(),
  about: z.string(),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const requestBody = await request.json()

  const parse = sendContactFormSchema.safeParse(requestBody)

  if (!parse.success) {
    return NextResponse.json({ message: parse.error.format() }, { status: 400 })
  }

  const { data } = parse

  const { about, businessName, email, linkWebsite, name, phone, type } = data

  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['brunoslvrlz13@gmail.com'],
      subject: 'Pixel to Pixel - Novo contato!',
      react: EmailTemplate({
        about,
        businessName,
        email,
        linkWebsite,
        name,
        phone,
        type,
      }),
    })

    return new Response()
  } catch (error) {
    return NextResponse.json({ error })
  }
}
