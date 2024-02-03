import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

const buttonVariants = tv(
  {
    base: 'group relative flex items-center justify-center overflow-hidden whitespace-nowrap rounded-full font-semibold transition-colors before:absolute before:inset-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 [&_span]:z-50 [&_span]:inline-flex [&_span]:items-center ',
    variants: {
      variant: {
        primary:
          'bg-background-white before:bg-effect-dark-hover before:hover:w-full focus:ring-border-white-primary [&_span]:text-text-dark-primary',
        secondary:
          'bg-background-dark-secondary before:bg-effect-white-hover before:hover:w-full focus:ring-border-dark-tertiary [&_span]:text-text-white-primary',
        'outlined-primary':
          'border border-border-dark-primary bg-transparent hover:bg-background-dark focus:ring-border-dark-primary [&_span]:text-text-dark-primary [&_span]:hover:text-text-white-primary',
        'outlined-secondary':
          'border border-border-white-secondary bg-transparent hover:bg-effect-dark-hover focus:ring-border-white-secondary [&_span]:text-text-dark-primary',
        icon: 'bg-transparent [&_span]:text-text-dark-primary',
      },
      size: {
        sm: 'h-11.5 px-7 py-2 text-sm [&_span]:gap-2',
        md: 'h-13 px-8 py-3 [&_span]:gap-3',
        lg: 'h-16 px-8 py-4.5 text-xl [&_span]:gap-4',
        icon: 'size-8 [&_span]:gap-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
  {
    responsiveVariants: ['sm', 'md', 'lg'],
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {asChild ? props.children : <span>{props.children}</span>}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
