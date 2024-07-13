'use server'

type AnotherProjectsResponseAPI = {
  id: string
  capaHome: {
    url: string
  }
  descricao: string
  nome: string
  tipo: 'website' | 'app' | 'landingPage'
  slug: string
}

type ApiResponse = {
  data: {
    projetos: Array<AnotherProjectsResponseAPI>
  }
}

export type AnotherProject = {
  id: string
  name: string
  type: 'website' | 'app' | 'landingPage'
  description: string
  banner: string
  slug: string
}

type FetchMoreProjectsTreathedResponse = {
  moreProjects: AnotherProject[]
}

export async function fetchMoreProjects({
  slug,
}: {
  slug: string
}): Promise<FetchMoreProjectsTreathedResponse> {
  const query = `
    query fetchMoreProjects {
      projetos(where: {NOT: {slug: "${slug}"}}) {
        capaHome {
          url
        }
        descricao
        nome
        tipo
        slug
        id
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

  const { projetos } = response.data

  return {
    moreProjects: projetos.map((projeto) => ({
      id: projeto.id,
      slug: projeto.slug,
      banner: projeto.capaHome.url,
      description: projeto.descricao,
      name: projeto.nome,
      type: projeto.tipo,
    })),
  }
}
