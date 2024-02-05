import { SVGProps } from 'react'

export function Broom(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_955_449)"
        stroke="#FCFCFC"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.25 24.5a10.413 10.413 0 01-3.172-5.25M21 16.625c0 3.464 1.456 6.453 4.375 7.875H6.672A11.337 11.337 0 013.5 16.625c0-3.085 1.228-5.566 3.223-7.617a.875.875 0 01.949-.198l2.776 1.125a1.751 1.751 0 002.277-.985l2.297-5.809c.454-1.093 1.692-1.675 2.803-1.26a2.187 2.187 0 011.259 2.887l-2.335 5.808a1.75 1.75 0 00.976 2.27l2.728 1.076a.874.874 0 01.547.813v1.89zM4.434 12.273l16.813 6.725" />
      </g>
      <defs>
        <clipPath id="clip0_955_449">
          <path fill="#fff" d="M0 0H28V28H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
