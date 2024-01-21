import { SVGProps } from 'react'

export function BehanceLogo(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_542_165)"
        stroke="#5C5C5C"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 11.625h5.438a3.187 3.187 0 110 6.375H3.5V6h5.063a2.812 2.812 0 110 5.625M16.25 7.125h6M20.886 17.625A3.75 3.75 0 1123 14.25h-7.5" />
      </g>
      <defs>
        <clipPath id="clip0_542_165">
          <path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
