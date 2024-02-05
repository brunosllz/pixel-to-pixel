import { SVGProps } from 'react'

export function Puzzle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_955_1333)">
        <path
          d="M7 23.625a.875.875 0 01-.875-.875v-4.67a3.062 3.062 0 110-5.536V7.875A.875.875 0 017 7h5.107a3.062 3.062 0 115.535 0h5.108a.875.875 0 01.875.875v4.67a3.063 3.063 0 100 5.536v4.669a.875.875 0 01-.875.875H7z"
          stroke="#FCFCFC"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_955_1333">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
