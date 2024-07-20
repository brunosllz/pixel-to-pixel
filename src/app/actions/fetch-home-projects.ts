'use server'

type ProjectsResponseAPI = {
  id: string
  nome: string
  descricao: string
  slug: string
  statusProjeto: 'finalizado' | 'emConstrucao'
  capaHome: {
    url: string
  }
}

type ApiResponse = {
  data: {
    projetos: ProjectsResponseAPI[]
  }
}
export type Project = {
  id: string
  name: string
  description: string
  slug: string
  homeBannerUrl: string
  status: 'finished' | 'inProgress'
}

type FetchHomeProjectsTreathedResponse = {
  projects: Project[]
}

export async function fetchHomeProjects(): Promise<FetchHomeProjectsTreathedResponse> {
  const query = `
    query fetchHomeProjects {
      projetos(orderBy: createdAt_ASC) {
        capaHome {
          url
        }
        id
        nome
        descricao
        slug
        statusProjeto
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
    projects: projetos.map((project) => ({
      id: project.id,
      name: project.nome,
      description: project.descricao,
      slug: project.slug,
      homeBannerUrl: project.capaHome.url,
      status:
        project.statusProjeto === 'finalizado' ? 'finished' : 'inProgress',
    })),
  }
}
