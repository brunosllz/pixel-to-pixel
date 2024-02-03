import * as React from 'react'

import { cn } from '@/lib/utils'

type InputRootProps = React.InputHTMLAttributes<HTMLInputElement>

const InputRoot = React.forwardRef<HTMLDivElement, InputRootProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative w-full', className)} {...props} />
    )
  },
)

InputRoot.displayName = 'InputRoot'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const InputControl = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'peer h-16 w-full appearance-none border border-border-white-secondary bg-transparent px-4 pb-[11.5px] pt-[31.5px] leading-none text-gray-900 transition-all hover:border-black focus:border-black focus:shadow-[4px_4px_0px_0px_#040404] focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed',
          className,
        )}
        placeholder=" "
        ref={ref}
        {...props}
      />
    )
  },
)
InputControl.displayName = 'InputControl'

type InputLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const InputLabel = React.forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'absolute start-4 top-6 z-10 origin-[0] -translate-y-4 scale-75 transform text-black duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-[#8E8E8E] peer-focus:top-6 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-black',
          className,
        )}
        {...props}
      />
    )
  },
)

InputLabel.displayName = 'InputLabel'

export { InputControl, InputRoot, InputLabel }
