'use server'

type FeedbacksResponseAPI = {
  avatar: {
    url: string
  }
  nomeDoCliente: string
  funcaoDoCliente: string
  id: string
  depoimento: string
}

type ApiResponse = {
  data: {
    feedbacks: FeedbacksResponseAPI[]
  }
}

export type Feedback = {
  id: string
  clientAvatarUrl: string
  clientName: string
  clientRole: string
  clientFeedback: string
}

type FetchHomeClientsFeedbacksTreathedResponse = {
  feedbacks: Feedback[]
}

export async function fetchHomeClientsFeedbacks(): Promise<FetchHomeClientsFeedbacksTreathedResponse> {
  const query = `
    query fetchClientFeedbacks {
      feedbacks {
        avatar {
          url
        }
        nomeDoCliente
        funcaoDoCliente
        id
        depoimento
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

  const { feedbacks } = response.data

  return {
    feedbacks: feedbacks.map((feedback) => ({
      id: feedback.id,
      clientAvatarUrl: feedback.avatar.url,
      clientName: feedback.nomeDoCliente,
      clientRole: feedback.funcaoDoCliente,
      clientFeedback: feedback.depoimento,
    })),
  }
}
