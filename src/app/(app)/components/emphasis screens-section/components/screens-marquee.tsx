import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee'

export function ScreensMarquee() {
  return (
    <Marquee autoFill speed={60} pauseOnHover>
      <div className="ml-6 w-[13.75rem] md:w-[15rem] lg:ml-8 lg:w-[17.5rem]">
        <Link
          href="https://dribbble.com/shots/16653289-Project-Name"
          target="_blank"
          className="space-y-4"
        >
          <div className="relative h-[17.5rem] w-full bg-[#D9D9D9] md:h-[18.75rem] lg:h-[20rem] lg:saturate-0 lg:hover:saturate-100">
            <Image
              fill
              sizes="(min-width: 768px) 240px, (min-width: 1024px) 280px, 220px"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7a80f8186064611.656ef8e3cebca.png"
              alt=""
              className="object-cover"
              quality={90}
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
        </Link>
      </div>
    </Marquee>
  )
}
