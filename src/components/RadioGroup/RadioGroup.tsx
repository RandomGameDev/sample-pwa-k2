import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import React from "react";
import type { RadioGroupProps } from "./interface";
import { cn } from "@cloudeats/robin-components";

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, testId = "RadioGroup", ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      data-testid={testId}
      className={cn("my-3 grid gap-4", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = "RadioGroup";
