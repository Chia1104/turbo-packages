import React, { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@acme/ui-utils";
import { type VariantProps, cva } from "class-variance-authority";
import { motion, type MotionProps } from "framer-motion";
import { type DefaultProps } from "../type";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-secondary dark:bg-primary text-white hover:bg-secondary/80 dark:hover:bg-primary/80",
        outline:
          "bg-transparent border border-secondary dark:border-primary hover:bg-secondary/10 dark:hover:bg-primary/10",
        ghost:
          "bg-transparent hover:bg-secondary/10 dark:hover:bg-primary/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
        success: "bg-success text-white hover:bg-success/80",
        successOutline:
          "bg-transparent border border-success text-success hover:bg-success/10",
        successGhost:
          "bg-transparent hover:bg-success/10 dark:hover:bg-success/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        successLink:
          "bg-transparent underline-offset-4 hover:underline text-success hover:bg-transparent dark:hover:bg-transparent",
        danger: "bg-danger text-white hover:bg-danger/80",
        dangerOutline:
          "bg-transparent border border-danger text-danger hover:bg-danger/10",
        dangerGhost:
          "bg-transparent hover:bg-danger/10 dark:hover:bg-danger/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        dangerLink:
          "bg-transparent underline-offset-4 hover:underline text-danger hover:bg-transparent dark:hover:bg-transparent",
        warning: "bg-warning text-white hover:bg-warning/80",
        warningOutline:
          "bg-transparent border border-warning text-warning hover:bg-warning/10",
        warningGhost:
          "bg-transparent hover:bg-warning/10 dark:hover:bg-warning/10 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        warningLink:
          "bg-transparent underline-offset-4 hover:underline text-warning hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps & MotionProps & DefaultProps
>(({ className, children, variant, size, noneStyle, ...props }) => {
  return (
    <motion.button
      whileTap={{
        scale: 0.95,
      }}
      className={cn(
        noneStyle ? className : buttonVariants({ variant, size, className })
      )}
      {...props}>
      {children}
    </motion.button>
  );
});
Button.displayName = "Button";

export default Button;
export { type ButtonProps, buttonVariants };
