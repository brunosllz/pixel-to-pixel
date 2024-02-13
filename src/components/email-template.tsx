interface EmailTemplateProps {
  email: string
  name: string
  phone: string
  businessName: string
  type: string
  linkWebsite: string
  about: string
}

export function EmailTemplate({
  about,
  businessName,
  email,
  linkWebsite,
  name,
  phone,
  type,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>Olá, {name}</h1>
      <p>
        Meu nome é {businessName} e estou entrando em contato para saber se você
        gostaria de receber mais informações sobre {type}.
      </p>
      <p>
        Aqui estão algumas informações sobre o {type}:
        <br />
        {about}
      </p>
      <p>
        Se você estiver interessado, você pode entrar em contato comigo por
        telefone ({phone}) ou por email ({email}). Você também pode visitar
        nosso site para saber mais: {linkWebsite}
      </p>
      <p>
        Obrigado por seu tempo e consideração. Estou ansioso para ouvir de você.
      </p>
      <p>
        Atenciosamente,
        <br />
        {businessName}
      </p>
    </div>
  )
}
