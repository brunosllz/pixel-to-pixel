import { SVGProps } from 'react'

export function FigmaComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_684_2218)"
        fill="#653DF5"
        stroke="#653DF5"
        strokeWidth={1.5}
        strokeLinejoin="round"
      >
        <path
          d="M8.152 1.85l-1.76 1.76a.49.49 0 000 .693l1.76 1.76a.49.49 0 00.694 0l1.76-1.76a.49.49 0 000-.694L8.845 1.85a.49.49 0 00-.694 0zM12.403 6.1l-1.76 1.76a.49.49 0 000 .693l1.76 1.76a.49.49 0 00.694 0l1.759-1.76a.49.49 0 000-.694L13.096 6.1a.49.49 0 00-.693 0z"
          strokeLinecap="square"
        />
        <path
          d="M3.902 6.1l-1.76 1.76a.49.49 0 000 .693l1.76 1.76a.49.49 0 00.694 0l1.76-1.76a.49.49 0 000-.693L4.595 6.1a.49.49 0 00-.694 0zM8.153 10.35l-1.76 1.76a.49.49 0 000 .694l1.76 1.759a.49.49 0 00.694 0l1.759-1.76a.49.49 0 000-.693l-1.76-1.76a.49.49 0 00-.693 0z"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_684_2218">
          <path fill="#fff" transform="translate(.5 .206)" d="M0 0H16V16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
