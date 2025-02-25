import { Button } from "@components/Button/Button";
import { cn } from "@cloudeats/robin-components";
import { useState } from "react";

interface OrderLineItemProps {
  dish: {
    title: string;
    price: number;
    addon: string;
    addonPrice: number;
    remark: string;
    image: string;
  };
}

const OrderLineItem: React.FC<OrderLineItemProps> = ({ dish }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={cn("align-items-center flex py-4")}>
      <img
        className="mr-4 h-40 w-40 object-cover"
        alt="Dish"
        src={dish.image}
      />
      <div className="ml-4 flex flex-1 flex-col">
        <div className="mb-4 flex justify-between text-4xl">
          <h3 className="font-semibold">{dish.title}</h3>
          <span>{`₱ ${dish.price}`}</span>
        </div>
        <p className="text-2xl">Add-ons:</p>
        <div className="mb-4 flex justify-between">
          <p className="text-2xl">{dish.addon}</p>
          <span className="text-3xl">+₱ {dish.addonPrice}</span>
        </div>
        <div className="mb-4 flex justify-between">
          <div className="flex flex-col text-2xl">
            <p>Remarks:</p>
            <p className="text-neutral-500">{`"${dish.remark}"`}</p>
          </div>
          <div className="flex items-center justify-center rounded-full bg-neutral-200 px-3 py-0 text-2xl">
            <Button
              style={{ cursor: "pointer" }}
              className="text-danger-500 rounded-full bg-transparent p-2 px-4 py-2"
              onClick={() => setQuantity(quantity - 1)}
            >
              {quantity > 1 ? "-" : "🗑️"}
            </Button>
            <span className="mx-2">{quantity}</span>
            <Button
              style={{ cursor: "pointer" }}
              className="rounded-full bg-transparent px-4 py-2 text-4xl"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-start">
          <Button
            style={{ cursor: "pointer" }}
            className="text-secondary-500 rounded-full bg-transparent"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export const OrderLineItemCards = ({ dishes }) => {
  return (
    <div className={cn("relative px-4 py-6")}>
      <h1 className={cn("text-4xl font-semibold")}>Sulit Chicken</h1>
      <hr className="my-4 border-2 border-b-neutral-100" />
      {dishes.map(
        (
          dish: {
            title: string;
            price: number;
            addon: string;
            addonPrice: number;
            remark: string;
            image: string;
          },
          index: number
        ) => (
          <OrderLineItem key={index} dish={dish} />
        )
      )}
      <Button
        style={{ cursor: "pointer" }}
        className="border-secondary-500 text-secondary-500 hover:bg-secondary-50 mt-4 w-full rounded-lg border-2 bg-transparent py-6 text-4xl"
      >
        + Add more dishes
      </Button>
    </div>
  );
};
