import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  testId?: string;
}

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  testId?: string;
  label: string;
  price?: string;
}
