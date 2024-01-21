import { SVGProps } from 'react'

export function MobileDevice(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_505_6665)"
        stroke="#181818"
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.111 24.778V5.222c0-.982-.796-1.778-1.778-1.778H9.667c-.982 0-1.778.796-1.778 1.778v19.556c0 .982.796 1.778 1.778 1.778h10.666c.982 0 1.778-.796 1.778-1.778zM12.334 7.889h5.333" />
      </g>
      <defs>
        <clipPath id="clip0_505_6665">
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
