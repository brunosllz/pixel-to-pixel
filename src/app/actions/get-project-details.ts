'use server'

type ProjectDetailsResponseAPI = {
  capaProjeto: {
    url: string
  }
  maisImagens: Array<{
    url: string
  }>
  comentarioSobreOProjeto: string
  dataDeEntrega: string
  depoimentoDoCliente: string
  descricao: string
  funcaoDoCliente: string
  funcaoRealizada: string
  id: string
  nome: string
  nomeDoCliente: string
  tipo: 'website' | 'app' | 'landingPage'
  imagemDoCliente: {
    url: string
  } | null
  linkDeAcesso: string
  tipoDeAcesso: 'website' | 'behance'
}

type ApiResponse = {
  data: {
    projeto: ProjectDetailsResponseAPI
  }
}

export type ProjectDeTails = {
  id: string
  name: string
  banner: string
  description: string
  commentAbout: string
  deliveryDate: string
  roleRealized: string
  clientFeedback: string
  clientRole: string
  clientName: string
  clientAvatarUrl: string | null
  type: 'website' | 'app' | 'landingPage'
  typeAccess: 'website' | 'behance'
  linkAccessUrl: string
  moreImages: Array<{ url: string }>
}

type GetProjectDetailsTreathedResponse = {
  projectDetails: ProjectDeTails
}

export async function GetProjectDetails({
  slug,
}: {
  slug: string
}): Promise<GetProjectDetailsTreathedResponse> {
  const query = `
    query getProjectDetails {
      projeto(where: {slug: "${slug}"}) {
        capaProjeto {
          url
        }
        comentarioSobreOProjeto
        dataDeEntrega
        depoimentoDoCliente
        descricao
        funcaoDoCliente
        funcaoRealizada
        id
        nome
        nomeDoCliente
        tipo
        maisImagens {
          url
        }
        imagemDoCliente {
          url
        }
        linkDeAcesso
        tipoDeAcesso
      }
    }
  `

  const data = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/cls9mho2o1sro01w3m1dte5de/master',
    {
      method: 'POST',
      body: JSON.stringify({
        query,
      }),
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    },
  )

  const response: ApiResponse = await data.json()

  const { projeto } = response.data

  return {
    projectDetails: {
      id: projeto.id,
      commentAbout: projeto.comentarioSobreOProjeto,
      banner: projeto.capaProjeto.url,
      deliveryDate: projeto.dataDeEntrega,
      description: projeto.descricao,
      name: projeto.nome,
      clientFeedback: projeto.depoimentoDoCliente,
      clientName: projeto.nomeDoCliente,
      clientAvatarUrl: projeto.imagemDoCliente?.url ?? null,
      clientRole: projeto.funcaoDoCliente,
      linkAccessUrl: projeto.linkDeAcesso,
      typeAccess: projeto.tipoDeAcesso,
      roleRealized: projeto.funcaoRealizada,
      type: projeto.tipo,
      moreImages: projeto.maisImagens,
    },
  }
}
