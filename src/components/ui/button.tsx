import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * buttonVariants
 *
 * variant → shape / style  (solid | outline | ghost | link)
 * color   → color token    (primary | secondary | destructive)
 *
 * The two axes compose independently so every combination is valid,
 * e.g. <Button variant="outline" color="secondary" />
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      /** Controls the visual shape / decoration of the button */
      variant: {
        solid:   "",
        outline: "border bg-background",
        ghost:   "",
        link:    "underline-offset-4 hover:underline",
      },
      /** Controls the color palette applied to the button */
      color: {
        primary:     "",
        secondary:   "",
        destructive: "",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm:      "h-9 rounded-md px-3",
        lg:      "h-11 rounded-md px-4 sm:px-8",
        icon:    "h-10 w-10",
      },
    },
    // Compound variants wire up the color × variant matrix
    compoundVariants: [
      // solid + color
      { variant: "solid",   color: "primary",     class: "bg-primary     text-primary-foreground     hover:bg-primary/90" },
      { variant: "solid",   color: "secondary",   class: "bg-secondary   text-secondary-foreground   hover:bg-secondary/80" },
      { variant: "solid",   color: "destructive", class: "bg-destructive text-destructive-foreground hover:bg-destructive/90" },
      // outline + color
      { variant: "outline", color: "primary",     class: "border-input   text-foreground             hover:bg-accent hover:text-accent-foreground" },
      { variant: "outline", color: "secondary",   class: "border-secondary text-secondary            hover:bg-secondary/10" },
      { variant: "outline", color: "destructive", class: "border-destructive text-destructive        hover:bg-destructive/10" },
      // ghost + color
      { variant: "ghost",   color: "primary",     class: "hover:bg-accent hover:text-accent-foreground" },
      { variant: "ghost",   color: "secondary",   class: "text-secondary hover:bg-secondary/10" },
      { variant: "ghost",   color: "destructive", class: "text-destructive hover:bg-destructive/10" },
      // link + color
      { variant: "link",    color: "primary",     class: "text-primary" },
      { variant: "link",    color: "secondary",   class: "text-secondary" },
      { variant: "link",    color: "destructive", class: "text-destructive" },
      // link + size → always strip padding/height so size never overrides link style
      { variant: "link",    size: "default",      class: "px-0 h-auto" },
      { variant: "link",    size: "sm",           class: "px-0 h-auto" },
      { variant: "link",    size: "lg",           class: "px-0 h-auto" },
      { variant: "link",    size: "icon",         class: "px-0 h-auto" },
    ],
    defaultVariants: {
      variant: "solid",
      color:   "primary",
      size:    "default",
    },
  },
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, color, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
