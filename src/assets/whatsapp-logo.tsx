import { SVGProps } from 'react'

export function WhatsAppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_900_437)"
        stroke="#181818"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M14.25 16.5A6.758 6.758 0 017.5 9.75a2.25 2.25 0 011.808-2.207L10.385 9.7 9.248 11.4l.155.375a5.294 5.294 0 002.827 2.827l.375.154 1.703-1.136 2.156 1.076A2.25 2.25 0 0114.25 16.5z"
          fill="#181818"
          strokeWidth={1.2}
        />
        <path
          d="M7.493 19.791a9 9 0 10-3.28-3.28l-1.174 3.5a.75.75 0 00.949.95l3.505-1.17z"
          strokeWidth={2.25}
        />
      </g>
      <defs>
        <clipPath id="clip0_900_437">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
