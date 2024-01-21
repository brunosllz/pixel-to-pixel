import { SVGProps } from 'react'

export function Quotes(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_505_6682)">
        <path
          d="M13.875 10.5h6.375a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-5.625a.75.75 0 01-.75-.75V9a3.75 3.75 0 013.75-3.75"
          fill="#040404"
        />
        <path
          d="M13.875 10.5h6.375a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-5.625a.75.75 0 01-.75-.75V9a3.75 3.75 0 013.75-3.75"
          stroke="#040404"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10.5h6.375a.75.75 0 01.75.75v6a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V9a3.75 3.75 0 013.75-3.75"
          fill="#040404"
        />
        <path
          d="M3 10.5h6.375a.75.75 0 01.75.75v6a.75.75 0 01-.75.75H3.75a.75.75 0 01-.75-.75V9a3.75 3.75 0 013.75-3.75"
          stroke="#040404"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_505_6682">
          <path fill="#fff" transform="rotate(180 12 12)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
