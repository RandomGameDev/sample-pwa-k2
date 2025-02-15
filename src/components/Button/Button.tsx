import { cn } from "@cloudeats/robin-components";
import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type JSX } from "react";

const buttonVariants = cva(
  "disabled:pointer-events-none rounded-xs flex items-center justify-center text-center h-fit focus:ring-secondary-500/30 focus:ring-4 outline-none w-fit relative",
  {
    variants: {
      variant: {
        default:
          "text-neutral-600 bg-neutral-200 hover:bg-neutral-300 focus:bg-neutral-300 disabled:bg-neutral-50 disabled:text-neutral-400",
        white:
          "text-black bg-white hover:bg-white/80 focus:bg-white/80 disabled:bg-white/20 disabled:text-white/30",
        primary:
          "text-black bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 disabled:bg-primary-300 disabled:text-primary-600",
        secondary:
          "text-white bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-600 disabled:bg-secondary-50 disabled:text-secondary-400",
        success:
          "text-white bg-success-500 hover:bg-success-600 focus:bg-success-600 disabled:bg-success-50 disabled:text-success-400",
        warning:
          "text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-600 disabled:bg-warning-50 disabled:text-warning-400",
        danger:
          "text-white bg-danger-500 hover:bg-danger-600 focus:bg-danger-600 disabled:bg-danger-50 disabled:text-danger-400",
      },
      size: {
        default: "px-5 py-4 gap-2 prose-body-xxl-semibold",
        md: "p-4 gap-1 prose-body-xl-semibold",
        sm: "p-3 gap-1 prose-body-l-semibold",
        mini: "p-2 gap-1 prose-body-m-semibold",
      },
      intent: {
        default: "",
        ghost: "border-1",
        link: "",
        pagination: "",
        "pagination-active": "",
      },
      icon: {
        true: "",
      },
      rounded: {
        true: "rounded-full",
      },
    },
    compoundVariants: [
      {
        size: "default",
        icon: true,
        className: "p-4 gap-0",
      },
      {
        size: "md",
        icon: true,
        className: "p-3 gap-0",
      },
      {
        size: "sm",
        icon: true,
        className: "p-2 gap-0",
      },
      {
        size: "mini",
        icon: true,
        className: "p-1 gap-0",
      },
      {
        size: "default",
        intent: "ghost",
        className: "px-[calc(1.25rem-1px)] py-[calc(1rem-1px)]",
      },
      {
        size: "md",
        intent: "ghost",
        className: "p-[calc(1rem-1px)]",
      },
      {
        size: "sm",
        intent: "ghost",
        className: "p-[calc(0.75rem-1px)]",
      },
      {
        size: "mini",
        intent: "ghost",
        className: "p-[calc(0.5rem-1px)]",
      },
      {
        variant: "default",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-neutral-600 hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800",
      },
      {
        variant: "default",
        intent: "ghost",
        className: "border-neutral-600",
      },
      {
        variant: "white",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-white hover:bg-white/20 hover:text-white focus:bg-white/20 focus:text-white",
      },
      {
        variant: "white",
        intent: "ghost",
        className: "border-white",
      },
      {
        variant: "primary",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-primary-600 hover:bg-primary-100 hover:text-primary-600 focus:bg-primary-100 focus:text-primary-600",
      },
      {
        variant: "primary",
        intent: "ghost",
        className: "border-primary-600",
      },
      {
        variant: "secondary",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-secondary-500 hover:bg-secondary-100 hover:text-secondary-600 focus:bg-secondary-100 focus:text-secondary-600",
      },
      {
        variant: "secondary",
        intent: "ghost",
        className: "border-secondary-500",
      },
      {
        variant: "secondary",
        intent: "pagination",
        className:
          "bg-white text-neutral-600 hover:bg-neutral-300 hover:text-neutral-800 focus:bg-neutral-300 focus:text-neutral-800",
      },
      {
        variant: "secondary",
        intent: "pagination-active",
        className:
          "bg-secondary-500/20 text-secondary-500 hover:bg-neutral-300 hover:text-neutral-800 focus:bg-neutral-300 focus:text-neutral-800",
      },
      {
        variant: "success",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-success-500 hover:bg-success-100 hover:text-success-600 focus:bg-success-100 focus:text-success-600",
      },
      {
        variant: "success",
        intent: "ghost",
        className: "border-success-500",
      },
      {
        variant: "warning",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-warning-500 hover:bg-warning-100 hover:text-warning-600 focus:bg-warning-100 focus:text-warning-600",
      },
      {
        variant: "warning",
        intent: "ghost",
        className: "border-warning-500",
      },
      {
        variant: "danger",
        intent: ["ghost", "link"],
        className:
          "bg-transparent text-danger-500 hover:bg-danger-100 hover:text-danger-600 focus:bg-danger-100 focus:text-danger-600",
      },
      {
        variant: "danger",
        intent: "ghost",
        className: "border-danger-500",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      intent: "default",
      icon: false,
      rounded: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  propagate?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  mainIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size,
      intent,
      icon,
      rounded,
      disabled,
      onClick,
      className,
      children,
      leftIcon,
      rightIcon,
      mainIcon,
      type = "button",
      propagate = false,
      ...props
    },
    ref
  ): JSX.Element => {
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (onClick) {
        onClick(event);
      }

      if (!propagate) event.stopPropagation();
    };

    return (
      <button
        data-testid={`Button-${variant}`}
        type={type}
        className={cn(
          buttonVariants({
            variant,
            size,
            intent,
            icon,
            rounded,
            className,
          })
        )}
        ref={ref}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        {icon ? <></> : leftIcon}
        {icon ? mainIcon : children}
        {icon ? <></> : rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
