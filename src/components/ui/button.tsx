import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/lib/utils'

// className="relative inline-flex h-16 overflow-hidden rounded-full bg-[#040404] px-8 py-[18px] text-xl text-white before:absolute before:inset-0 before:h-full before:w-0 before:bg-zinc-700 before:transition-all hover:before:w-full focus:outline-none focus:ring-1 focus:ring-black"

const buttonVariants = tv({
  slots: {
    base: 'relative overflow-hidden whitespace-nowrap rounded-full font-medium transition-colors before:absolute before:inset-0 before:z-0 before:h-full before:w-0 before:transition-all before:duration-200 focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
    span: 'relative z-50 inline-flex items-center',
  },
  variants: {
    variant: {
      primary: {
        base: 'bg-white before:bg-red-800 hover:bg-white before:hover:w-full',
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
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

// {
//   variants: {
//     variant: {
//       default: 'bg-primary text-primary-foreground hover:bg-primary/90',
//       destructive:
//         'bg-destructive text-destructive-foreground hover:bg-destructive/90',
//       outline:
//         'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
//       secondary:
//         'bg-secondary text-secondary-foreground hover:bg-secondary/80',
//       ghost: 'hover:bg-accent hover:text-accent-foreground',
//       link: 'text-primary underline-offset-4 hover:underline',
//     },
//     size: {
//       default: 'h-10 px-4 py-2',
//       sm: 'h-9 rounded-md px-3',
//       lg: 'h-11 rounded-md px-8',
//       icon: 'h-10 w-10',
//     },
//   },
//   defaultVariants: {
//     variant: 'default',
//     size: 'default',
//   },

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
