interface CheckboxProps {
  label: string;
  price?: string;
  onClickHandler?: () => void;
  onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
  containerClassNames?: string;
  checkboxClassNames?: string;
}

export const Checkbox = ({
  label,
  price = "+₱30.00",
  containerClassNames = "",
  checkboxClassNames = "h-5 w-5",
  isChecked = false,
  onChangeHandler,
}: CheckboxProps) => {
  return (
    <div
      className={`flex w-full items-center justify-between ${containerClassNames}`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className={`cursor-pointer rounded-sm border border-gray-400 focus:ring-0 focus:outline-none ${checkboxClassNames}`}
          checked={isChecked}
          onChange={onChangeHandler}
        />
        <span className="text-sm text-gray-700">{label}</span>
      </div>
      <span className="text-sm text-gray-700">{price}</span>
    </div>
  );
};
