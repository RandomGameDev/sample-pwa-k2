import { Button } from "../Button/Button.tsx";
import { useState } from "react";

interface AddToBasketProps {
  onClickHandler: () => void;
  description?: string;
  currencySymbol?: string;
  isDisabled?: boolean;
  isSubmitOrder?: boolean;
  price?: number;
}

export const AddToBasket = ({
  onClickHandler,
  description = "Add to Basket",
  currencySymbol = "₱",
  isDisabled = false,
  isSubmitOrder = false,
  price = 0,
}: AddToBasketProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = quantity * price;
  const formattedPrice = `${currencySymbol}${totalPrice.toFixed(2)}`;

  return (
    <div className="static bottom-0 mt-auto">
      {!isSubmitOrder && (
        <div className="mb-2 flex items-center justify-center gap-1">
          <Button
            type="button"
            rounded={true}
            size={"md"}
            className={"h-12 w-12"}
            onClick={handleDecrement}
            variant={"primary"}
          >
            -
          </Button>
          <span className="px-2 font-medium">{quantity}</span>
          <Button
            type="button"
            rounded={true}
            size={"md"}
            className={"h-12 w-12"}
            variant={"primary"}
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
      )}
      <div className={"flex items-center justify-center"}>
        <Button
          type="button"
          onClick={onClickHandler}
          variant={"primary"}
          disabled={isDisabled}
        >
          <div className="flex w-full items-center justify-between">
            <span>{description}</span>
            <span className="ml-2">- {formattedPrice}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
