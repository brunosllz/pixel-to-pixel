'use server'

type HighlightScreensResponseAPI = {
  id: string
  nomeDoProjeto: string
  linkDoProjeto: string
  username: string
  banner: {
    url: string
  }
}

type ApiResponse = {
  data: {
    telasEmDestaques: HighlightScreensResponseAPI[]
  }
}
export type HighlightScreens = {
  id: string
  name: string
  userName: string
  bannerUrl: string
  projectLink: string
}

type FetchHighlightScreensResponse = {
  highlightScreens: HighlightScreens[]
}

export async function fetchHighlightScreens(): Promise<FetchHighlightScreensResponse> {
  const query = `
    query fetchHighlightScreens {
      telasEmDestaques {
        id
        nomeDoProjeto
        linkDoProjeto
        username
        banner {
          url
        }
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

  const { telasEmDestaques } = response.data

  return {
    highlightScreens: telasEmDestaques.map((highlightScreens) => ({
      id: highlightScreens.id,
      name: highlightScreens.nomeDoProjeto,
      userName: highlightScreens.username,
      bannerUrl: highlightScreens.banner.url,
      projectLink: highlightScreens.linkDoProjeto,
    })),
  }
}
