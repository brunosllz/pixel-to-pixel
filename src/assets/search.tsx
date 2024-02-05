import { SVGProps } from 'react'

export function Search(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      style={{
        flex: 1,
      }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path stroke="red" fill="#00f" d="M10 10H110V110H10z" />
    </svg>
  )
}
