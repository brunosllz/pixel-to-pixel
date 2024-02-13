import { SVGProps } from 'react'

export function Lighting(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_955_408)">
        <path
          d="M17.5 1.75l-1.75 8.75 7 2.625L10.5 26.25l1.75-8.75-7-2.625L17.5 1.75z"
          stroke="#FCFCFC"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_955_408">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
