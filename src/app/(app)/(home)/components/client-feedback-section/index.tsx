import { fetchHomeClientsFeedbacks } from '@/app/actions/fetch-clients-feedbacks'
import { CommentCursorFigma } from '@/assets/comment-cursor-figma'
import { ArrowUp } from 'lucide-react'
import { ClientFeedbackCarousel } from './components/client-feedback-carousel'

export async function ClientFeedbackSection() {
  const { feedbacks } = await fetchHomeClientsFeedbacks()

  if (!feedbacks.length) {
    return null
  }

  return (
    <section
      id="feedbacks"
      className="mx-auto w-full max-w-container space-y-10.5 px-5 py-16 md:px-8 lg:space-y-14 lg:px-5 lg:py-28"
    >
      <div className="flex items-end justify-between">
        <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
          Experiências dos Nosso Clientes
        </h2>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex h-14 w-[18.5rem] items-center justify-between rounded-md bg-brand-primary px-4 py-2 pl-5">
            <span className="relative pl-2 text-sm text-text-white-secondary before:absolute before:left-0 before:top-1/2 before:h-4.5 before:w-0.5 before:-translate-y-1/2 before:animate-blinking-hand before:bg-text-white-primary">
              Add comentário
            </span>

            <div className="rounded-full bg-background-white p-1.5">
              <ArrowUp
                size={18}
                strokeWidth={3}
                className="text-brand-primary"
              />
            </div>
          </div>

          <CommentCursorFigma />
        </div>
      </div>

      <ClientFeedbackCarousel feedbacks={feedbacks} />
    </section>
  )
}
