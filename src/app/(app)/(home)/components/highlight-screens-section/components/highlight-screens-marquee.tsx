import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { fetchHighlightScreens } from '@/app/actions/fetch-hightlight-screens'

export async function HighlightScreensMarquee() {
  const { highlightScreens } = await fetchHighlightScreens()

  return (
    <Marquee autoFill speed={60} pauseOnHover>
      {highlightScreens.length > 0 ? (
        highlightScreens.map((highlightScreen) => (
          <div
            key={highlightScreen.id}
            className="ml-6 w-[13.75rem] md:w-[15rem] lg:ml-8 lg:w-[17.5rem]"
          >
            <Link
              href={highlightScreen.projectLink}
              target="_blank"
              className="space-y-4"
            >
              <div className="relative h-[17.5rem] w-full bg-[#D9D9D9] md:h-[18.75rem] lg:h-[20rem] lg:saturate-0 lg:hover:saturate-100">
                <Image
                  fill
                  sizes="(min-width: 768px) 240px, (min-width: 1024px) 280px, 220px"
                  src={highlightScreen.bannerUrl}
                  alt=""
                  className="object-cover"
                  quality={90}
                />
              </div>

              <div className="space-y-2">
                <span className="line-clamp-1 text-lg font-medium leading-none">
                  {highlightScreen.name}
                </span>

                <span className="block text-text-dark-complementary">
                  {highlightScreen.userName}
                </span>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="ml-6 w-[13.75rem] md:w-[15rem] lg:ml-8 lg:w-[17.5rem]">
          <div className="relative h-[17.5rem] w-full bg-[#D9D9D9] md:h-[18.75rem] lg:h-[20rem]" />

          <div className="space-y-2">
            <span className="line-clamp-1 text-lg font-medium leading-none">
              -
            </span>

            <span className="block text-text-dark-complementary">@-</span>
          </div>
        </div>
      )}
    </Marquee>
  )
}
