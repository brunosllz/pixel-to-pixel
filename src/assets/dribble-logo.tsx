import { SVGProps } from 'react'

export function DribbleLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_542_44)"
        stroke="#5C5C5C"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.167 21a9 9 0 100-18 9 9 0 000 18zM6.823 19.244a14.993 14.993 0 0114.344-7.17" />
        <path d="M17.792 4.977A14.971 14.971 0 016.167 10.5c-.949 0-1.896-.089-2.828-.266" />
        <path d="M8.223 3.908a14.992 14.992 0 017.406 12.938c0 1.225-.148 2.446-.444 3.636" />
      </g>
      <defs>
        <clipPath id="clip0_542_44">
          <path fill="#fff" transform="translate(.167)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
