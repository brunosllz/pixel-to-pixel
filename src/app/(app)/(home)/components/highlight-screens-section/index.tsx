import { HighlightScreensMarquee } from './components/highlight-screens-marquee'

export function HighlightScreensSection() {
  return (
    <section className="w-full bg-background-white-secondary">
      <div className=" w-full space-y-10.5 py-16 lg:space-y-14 lg:py-28">
        <div className="mx-auto flex max-w-container items-end justify-between px-5 md:px-8 lg:px-5">
          <h2 className="text-[1.75rem] font-semibold md:text-[2rem] lg:max-w-[32rem] lg:text-[2.625rem] lg:leading-tight">
            Telas de Destaque que Inspiram
          </h2>

          <div className="group relative hidden max-w-[12.5rem] grid-cols-5 before:absolute before:left-1/2 before:top-1/2 before:h-full before:w-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-colors before:duration-200 hover:before:bg-[rgb(0,0,0)]/80 lg:grid">
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className="h-7 w-10 odd:bg-brand-primary" />
            ))}

            <div className="absolute left-1/2 top-1/2 hidden h-8 w-max -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border-white-primary p-2 transition-transform duration-300 group-hover:flex">
              <span className="block text-xs font-medium text-text-white-primary">
                Escolher Imagem
              </span>
            </div>
          </div>
        </div>

        <HighlightScreensMarquee />
      </div>
    </section>
  )
}
