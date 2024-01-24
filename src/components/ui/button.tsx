import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const buttonVariants = tv({
  slots: {
    base: 'relative overflow-hidden whitespace-nowrap rounded-full font-medium transition-colors before:absolute before:inset-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
    span: 'relative z-50 inline-flex items-center',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-background-white before:bg-effect-dark-hover before:hover:w-full focus:ring-border-white-primary',
        span: 'text-text-dark-primary',
      },
      secondary: {
        base: 'bg-background-dark-secondary before:bg-effect-white-hover before:hover:w-full focus:ring-border-dark-tertiary',
        span: 'text-text-white-primary',
      },
      'outlined-primary': {
        base: 'group border border-border-dark-primary bg-transparent hover:bg-background-dark focus:ring-border-dark-primary',
        span: 'text-text-dark-primary group-hover:text-text-white-primary',
      },
      'outlined-secondary': {
        base: 'border border-border-white-secondary bg-transparent hover:bg-effect-dark-hover focus:ring-border-white-secondary',
        span: 'text-text-dark-primary',
      },
      icon: {
        base: 'bg-transparent',
        span: 'text-text-dark-primary',
      },
    },
    size: {
      sm: {
        base: 'h-11.5 px-7 py-2 text-sm',
        span: 'gap-2',
      },
      md: {
        base: 'h-13 px-8 py-3',
        span: 'gap-3',
      },
      lg: {
        base: 'h-16 px-8 py-4.5 text-xl',
        span: 'gap-4',
      },
      icon: {
        base: 'size-8',
        span: 'gap-0',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    const { base, span } = buttonVariants({ variant, size })

    return (
      <Comp className={cn(base(), className)} ref={ref} {...props}>
        <span className={span()}>{props.children}</span>
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
