import { cn } from "@cloudeats/robin-components";
import { type PhosphorIcon } from "@phosphor-icons/core";
import * as Icons from "@phosphor-icons/react";
import { type IconProps as PhosphorIconProps } from "@phosphor-icons/react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva("", {
  variants: {
    size: {
      "3xs": "h-2.5 w-2.5 aspect-square",
      "2xs": "h-3 w-3 aspect-square",
      xs: "h-4 w-4 aspect-square",
      sm: "h-6 w-6 aspect-square",
      md: "h-8 w-8 aspect-square",
      lg: "h-12 w-12 aspect-square",
      xl: "h-18 w-18 aspect-square",
      xxl: "h-24 w-24 aspect-square",
    },
    spin: {
      true: "animate-spin",
    },
  },
  defaultVariants: {
    spin: false,
    size: "sm",
  },
});

enum CustomIconNames {
  CustomOrder = "CustomOrder",
  CustomProvider = "CustomProvider",
}

export type IconNames = Icons.Icon;
export type IconPascalName =
  | PhosphorIcon["pascal_name"]
  | "CustomOrder"
  | "CustomProvider";

export interface IconProps
  extends Omit<PhosphorIconProps, "weight" | "size">,
    VariantProps<typeof iconVariants> {
  icon: IconPascalName;
  weight?: "outline" | "fill" | "bold";
  className?: string;
  disabled?: boolean;
}
export const Icon = ({
  icon,
  size,
  spin,
  className,
  weight = "outline",
  ...props
}: IconProps): JSX.Element => {
  const IconComponent = Icons[icon] as IconNames;

  return (
    <IconComponent
      weight={weight === "outline" ? "regular" : weight}
      data-testid={`Icon-${icon}`}
      className={cn(iconVariants({ className, size, spin }))}
      {...props}
    />
  );
};
