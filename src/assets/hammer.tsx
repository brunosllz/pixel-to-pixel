import { SVGProps } from 'react'

export function Hammer(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_955_1743)"
        stroke="#FCFCFC"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.813 12.688l3.5 3.5M4.375 7L5.88 5.444a9.625 9.625 0 0113.613 0l6.938 6.988a.875.875 0 010 1.237l-3.135 3.138a.875.875 0 01-1.237 0l-3.685-3.682-11.12 11.12a.875.875 0 01-1.236 0l-2.263-2.26a.875.875 0 010-1.238L14.875 9.625l-6.15-6.149M23.852 9.835l-4.383 4.384" />
      </g>
      <defs>
        <clipPath id="clip0_955_1743">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
