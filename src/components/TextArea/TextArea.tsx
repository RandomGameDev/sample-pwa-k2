import { cn } from "@cloudeats/robin-components";
import { forwardRef } from "react";

export type TextAreaProps = React.InputHTMLAttributes<HTMLInputElement>;

export const TextArea = forwardRef<HTMLInputElement, TextAreaProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        data-testid="TextField"
        type={type}
        className={cn(
          "border-ce-neutral-300 rounded-md border-1 px-4 py-2 placeholder:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextField";
