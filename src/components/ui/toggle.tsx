'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const toggleVariants = tv(
  {
    base: 'ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring group flex items-center justify-center rounded-md border border-border-white-secondary text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ',
    variants: {
      variant: {
        default:
          'bg-transparent data-[state=on]:border-background-dark data-[state=on]:bg-background-dark data-[state=on]:text-background-white',
      },
      size: {
        default: 'h-14 gap-4 rounded-full px-8',
        md: 'h-[5.5rem] flex-col gap-2 rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
  { responsiveVariants: ['md'] },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
