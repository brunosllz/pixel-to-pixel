import { ScreensMarquee } from './components/screens-marquee'

export function EmphasisScreensSection() {
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

        <ScreensMarquee />

        {/* <Carousel
        opts={{
          align: 'start',
          dragFree: true,
          containScroll: 'trimSnaps',
        }}
        className="bg-red-800"
      >
        <CarouselContent className="mr-5 max-w-container pl-5 md:mr-8 md:pl-8 lg:mr-5 lg:pl-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="group max-w-max transition-all lg:saturate-0 lg:hover:saturate-100"
            >
              <div className="w-[13.75rem] space-y-4 md:w-[15rem] lg:w-[17.5rem]">
                <div className="h-[17.5rem] w-full bg-[#D9D9D9] md:h-[18.75rem] lg:h-[20rem]">
                  <Image
                    width={220}
                    height={280}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
                    alt=""
                    className="h-full w-full object-cover"
                    quality={100}
                  />
                </div>

                <div className="space-y-2">
                  <span className="line-clamp-1 text-lg font-medium leading-none">
                    Nome do projeto no dribble
                  </span>

                  <span className="block text-text-dark-complementary">
                    @uiamauri
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel> */}
      </div>
    </section>
  )
}
