import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-fuchsia-600 text-white shadow hover:bg-fuchsia-500",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-500",
        outline:
          "border border-white/10 bg-transparent shadow-sm hover:bg-white/5 hover:text-white text-slate-300",
        secondary:
          "bg-slate-800 text-slate-200 shadow-sm hover:bg-slate-700",
        ghost: 
          "hover:bg-white/5 hover:text-white text-slate-300",
        link: 
          "text-fuchsia-400 underline-offset-4 hover:underline",
        // New gradient variant for primary CTAs
        gradient: 
          "bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-purple-900/40 ring-1 ring-white/10",
        // Glass/frosted variant for secondary CTAs  
        glass:
          "bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10",
        // Navbar CTA style
        navCta:
          "bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:opacity-90 text-white text-xs font-bold shadow-lg shadow-purple-500/20 hover:scale-105 uppercase tracking-wide",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
