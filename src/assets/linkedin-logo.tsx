import { SVGProps } from 'react'

export function LinkedinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_542_78)">
        <path
          d="M21.083 3h-16.5a.75.75 0 00-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75zM12.458 11.625V16.5M8.708 11.625V16.5"
          stroke="#5C5C5C"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.458 14.25a2.625 2.625 0 115.25 0v2.25"
          stroke="#5C5C5C"
          strokeWidth={2.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.708 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#5C5C5C" />
      </g>
      <defs>
        <clipPath id="clip0_542_78">
          <path fill="#fff" transform="translate(.833)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
