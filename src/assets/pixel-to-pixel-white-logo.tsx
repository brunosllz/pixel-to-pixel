import { SVGProps } from 'react'

export function PixelToPixelWhiteLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#FCFCFC" d="M0 0H48V48H0z" />
      <path
        d="M15 10.5h6v27h-6v-27zM21 28.5v-6h6v-6h-6v-6h12v18H21z"
        fill="#040404"
      />
      <path
        d="M15 35.25h2.25v2.25H15v-2.25zM30.75 26.25H33v2.25h-2.25v-2.25zM30.75 10.5H33v2.25h-2.25V10.5zM27 14.25h2.25v2.25H27v-2.25z"
        fill="#FCFCFC"
      />
    </svg>
  )
}
