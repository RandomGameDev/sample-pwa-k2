import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "@cloudeats/robin-components";

const typographyVariants = cva("break-words", {
  variants: {
    variant: {
      "display-xxl": "prose-display-xxl",
      "display-xl": "prose-display-xl",
      "display-lg": "prose-display-lg",
      "display-md": "prose-display-md",
      "display-sm": "prose-display-sm",
      "heading-xxl": "prose-heading-xxl",
      "heading-xl": "prose-heading-xl",
      "heading-lg": "prose-heading-lg",
      "heading-md": "prose-heading-md",
      "heading-sm": "prose-heading-sm",
      "body-xxxl-semibold": "prose-body-xxxl-semibold",
      "body-xxxl-regular": "prose-body-xxxl-regular",
      "body-xxl-semibold": "prose-body-xxl-semibold",
      "body-xxl-regular": "prose-body-xxl-regular",
      "body-xl-semibold": "prose-body-xl-semibold",
      "body-xl-regular": "prose-body-xl-regular",
      "body-l-semibold": "prose-body-l-semibold",
      "body-l-regular": "prose-body-l-regular",
      "body-m-semibold": "prose-body-m-semibold",
      "body-m-regular": "prose-body-m-regular",
      "body-s-semibold": "prose-body-s-semibold",
      "body-s-regular": "prose-body-s-regular",
      "body-xs-semibold": "prose-body-xs-semibold",
      "body-xs-regular": "prose-body-xs-regular",
    },
  },
  defaultVariants: {
    variant: "body-m-regular",
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children?: React.ReactNode;
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "header";
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, variant, onClick, component = "p" }, ref) => {
    const Element = component;
    return (
      <Slot
        ref={ref}
        className={cn(typographyVariants({ className, variant }))}
        onClick={onClick}
      >
        <Element>{children}</Element>
      </Slot>
    );
  }
);

Typography.displayName = "Typography";
