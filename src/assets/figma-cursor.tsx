import { SVGProps } from 'react'

export function FigmaCursor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="38"
      height="22"
      viewBox="0 0 38 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_630_1800)">
        <path
          d="M9.08691 19.4755C9.13431 19.6126 9.22387 19.7312 9.34277 19.8144C9.46168 19.8975 9.60383 19.9409 9.74889 19.9383C9.89394 19.9357 10.0345 19.8873 10.1503 19.8C10.2662 19.7127 10.3515 19.591 10.394 19.4523L12.4178 12.8738C12.4508 12.7665 12.5095 12.6688 12.5889 12.5894C12.6683 12.51 12.766 12.4513 12.8733 12.4183L19.4518 10.3988C19.5905 10.3563 19.7123 10.271 19.7996 10.1551C19.8868 10.0392 19.9352 9.89872 19.9378 9.75366C19.9404 9.6086 19.897 9.46645 19.8139 9.34755C19.7308 9.22864 19.6122 9.13908 19.475 9.09168L4.35003 3.48168C4.2287 3.44042 4.09825 3.43389 3.9734 3.46283C3.84856 3.49177 3.73429 3.55503 3.64349 3.64547C3.55269 3.73592 3.48897 3.84994 3.45954 3.97467C3.43011 4.0994 3.43612 4.22988 3.47691 4.35137L9.08691 19.4755Z"
          stroke="#040404"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g clip-path="url(#clip1_630_1800)">
        <path
          d="M35.75 9.5L32 13.25L28.25 9.5"
          stroke="#040404"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_630_1800">
          <rect width="22" height="22" fill="white" />
        </clipPath>
        <clipPath id="clip1_630_1800">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(26 5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
