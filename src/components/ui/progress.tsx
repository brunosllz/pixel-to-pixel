'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, max, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-0.5 w-full overflow-hidden  bg-border-white-primary',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-[] flex-1 bg-border-dark-secondary transition-all duration-700"
        role="progressbar"
        aria-valuenow={value ?? 0}
        aria-valuemin={1}
        aria-valuemax={max}
        style={{
          transform: `translateX(-${100 - ((value ?? 0) * 100) / (max ?? 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
