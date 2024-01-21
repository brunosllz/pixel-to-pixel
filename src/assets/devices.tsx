import { SVGProps } from 'react'

export function Devices(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_505_6653)"
        stroke="#181818"
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M27.445 22.111V11.89c0-.982-.796-1.778-1.778-1.778H19c-.982 0-1.778.796-1.778 1.778v10.222c0 .982.796 1.778 1.778 1.778h6.667c.982 0 1.778-.796 1.778-1.778zM13.222 23.889h-2.666" />
        <path d="M17.222 19.445h-12a1.778 1.778 0 01-1.777-1.778V7.889a1.778 1.778 0 011.777-1.778h16A1.778 1.778 0 0123 7.89v2.222M21.667 14.556H23" />
      </g>
      <defs>
        <clipPath id="clip0_505_6653">
          <path
            fill="#fff"
            transform="translate(.778 .778)"
            d="M0 0H28.4444V28.4444H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
