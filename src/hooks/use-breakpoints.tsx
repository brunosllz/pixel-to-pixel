'use client'

import { useMediaQuery } from 'react-responsive'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'
import { screens } from 'tailwindcss/defaultTheme'
import { useEffect, useState } from 'react'

const localTailwindConfig = resolveConfig(tailwindConfig)
const breakpoints = localTailwindConfig.theme?.screens || {}

export function useBreakpoint<K extends keyof typeof screens>(
  breakpointKey: K,
) {
  const [bool, setBool] = useState(false)

  const breakpointValue = breakpoints[breakpointKey as keyof typeof breakpoints]

  const boolUseMediaQuery = useMediaQuery({
    query: `(min-width: ${breakpointValue})`,
  })

  useEffect(() => {
    setBool(boolUseMediaQuery)
  }, [boolUseMediaQuery])

  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1)

  type Key = `is${Capitalize<K>}`

  return {
    [`is${capitalizedKey}`]: bool,
  } as Record<Key, boolean>
}
