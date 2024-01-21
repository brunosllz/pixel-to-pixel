import { SVGProps } from 'react'

export function PixelToPixelDarkLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={42}
      height={42}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#040404" d="M0 0H42V42H0z" />
      <path
        d="M13.125 9.188h5.25v23.624h-5.25V9.189zM18.375 24.938v-5.25h5.25v-5.25h-5.25v-5.25h10.5v15.75h-10.5z"
        fill="#FCFCFC"
      />
      <path
        d="M13.125 30.844h1.969v1.968h-1.969v-1.968zM26.906 22.969h1.969v1.968h-1.969V22.97zM26.906 9.188h1.969v1.968h-1.969V9.187zM23.625 12.469h1.969v1.969h-1.969v-1.97z"
        fill="#040404"
      />
    </svg>
  )
}
