import { SVGProps } from 'react'

export function FigmaSquare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="24"
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_630_1807)">
        <path
          d="M19.5 3.75H4.5C4.08579 3.75 3.75 4.08579 3.75 4.5V19.5C3.75 19.9142 4.08579 20.25 4.5 20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V4.5C20.25 4.08579 19.9142 3.75 19.5 3.75Z"
          stroke="#040404"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g clip-path="url(#clip1_630_1807)">
        <path
          d="M37.75 10.5L34 14.25L30.25 10.5"
          stroke="#040404"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_630_1807">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <clipPath id="clip1_630_1807">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(28 6)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
