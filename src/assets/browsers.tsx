import { SVGProps } from 'react'

export function Browsers(props: SVGProps<SVGSVGElement>) {
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
        clipPath="url(#clip0_505_6659)"
        stroke="#181818"
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.778 10.111h-16a.889.889 0 00-.89.89v12.444c0 .49.399.888.89.888h16c.49 0 .889-.397.889-.888V11a.889.889 0 00-.89-.889z" />
        <path d="M8.334 10.111V6.556a.889.889 0 01.888-.89h16a.889.889 0 01.89.89V19a.889.889 0 01-.89.889h-3.555M3.889 14.556h17.778" />
      </g>
      <defs>
        <clipPath id="clip0_505_6659">
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
