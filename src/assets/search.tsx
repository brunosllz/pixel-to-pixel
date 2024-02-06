import { SVGProps } from 'react'

export function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_977_1660)"
        stroke="#FCFCFC"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.25 21a8.75 8.75 0 100-17.5 8.75 8.75 0 000 17.5zM18.438 18.437L24.5 24.5" />
      </g>
      <defs>
        <clipPath id="clip0_977_1660">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
