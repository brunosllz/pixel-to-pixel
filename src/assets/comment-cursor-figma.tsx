import { SVGProps } from 'react'

export function CommentCursorFigma(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={38}
      height={38}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_94_1043)">
        <path
          d="M19.594 32.063H7.076a1.136 1.136 0 01-1.138-1.139V18.406a13.656 13.656 0 1113.656 13.657z"
          fill="#653DF5"
          stroke="#653DF5"
          strokeWidth={3.5625}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_94_1043">
          <path fill="#fff" d="M0 0H38V38H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
