import { cn, Icon, Typography } from "@cloudeats/robin-components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import type { RadioGroupItemProps } from "./interface";

export const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      price,
      label,
      className,
      labelClassName,
      testId = "RadioGroupItem",
      ...props
    },
    ref
  ) => {
    const id = props.id || `radio-item-${props.value}`;
    return (
      <div className="flex cursor-pointer items-center gap-x-2">
        <RadioGroupPrimitive.Item
          data-testid={testId}
          id={id}
          ref={ref}
          className={cn(
            "focus:ring-secondary-500/30 data-[state=checked]:border-secondary-600 aspect-square size-5 rounded-full border-1 border-neutral-300 shadow focus:ring-4 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Icon
              icon="Circle"
              weight="fill"
              size="xs"
              className="text-secondary-600"
            />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <label htmlFor={id} className="cursor-pointer">
          <Typography className={labelClassName || "prose-body-l-regular"}>
            {label}
          </Typography>
        </label>
        {price && <span className="text-sm text-gray-700">{price}</span>}
      </div>
    );
  }
);
RadioGroupItem.displayName = "RadioGroupItem";
