import { Button } from "@components/Button/Button";
import { cn } from "@cloudeats/robin-components";
import { OrderLineItemCards } from "@components/Cards/OrderLineItemCards";
import { RadioGroup, RadioGroupItem } from "@components/RadioGroup";
import { useState } from "react";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";

export const OrderPage = () => {
  const [dishes] = useState([
    {
      addon: "Garlic Aioli Dip",
      addonPrice: 30,
      image: landing1,
      price: 249,
      quantity: 1,
      remark: "Please remove onions if there are any.",
      title: "Premium Soy Garlic Karaage",
    },
    {
      addon: "Extra Sliced Cheese",
      addonPrice: 50,
      image: landing2,
      price: 249,
      quantity: 1,
      remark: "Please remove onions if there are any.",
      title: "Dish Food 1",
    },
  ]);

  const diningOptions = ["Dine-in", "Take-Out"];
  const totalPrice = dishes.reduce(
    (acc, dish) => acc + dish.price + dish.addonPrice,
    0
  );

  return (
    <div className={cn("relative px-4 py-6")}>
      <h1 className={cn("text-center text-4xl font-semibold")}>Your Orders</h1>
      <OrderLineItemCards dishes={dishes} />
      <div className={cn("relative px-4 py-6")}>
        <p className="mb-6 text-4xl">Select dining options</p>
        <RadioGroup className="gap-4">
          {diningOptions.map((option) => (
            <RadioGroupItem
              key={option}
              value={option}
              label={option}
              labelClassName="text-2xl"
            />
          ))}
        </RadioGroup>
        <hr className="my-4 border-2 border-b-neutral-100" />
        <p className="mt-6 mb-6 text-4xl">Payment Summary</p>
        <p className="mb-6 text-3xl">Subtotal</p>
        <div className="flex justify-between text-neutral-500">
          <div className="flex flex-col gap-2">
            {dishes.map((dish) => (
              <div key={dish.title} className="text-3xl">
                <span className="mr-2">{dish.quantity}x</span>
                {dish.title}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-3xl">
            {dishes.map((dish) => (
              <div key={dish.title}>
                ₱ {(dish.price + dish.addonPrice).toLocaleString()}
              </div>
            ))}
          </div>
        </div>
        <hr className="my-4 border-2 border-b-neutral-100" />
        <div className="mt-6 mb-6 flex justify-between text-4xl">
          <p>
            Total{" "}
            <span className={cn("text-neutral-400")}>(inclusive of Tax)</span>:
          </p>
          <p>₱ {totalPrice.toLocaleString()}</p>
        </div>
        <p className="text-secondary-500 mb-6 text-2xl">See summary</p>
        <div className="mt-6">
          <Button
            style={{ cursor: "pointer" }}
            className="border-primary-300 text-primary-600 bg-primary-300 hover:bg-primary-400 mt-4 w-full rounded-lg border-2 py-8 text-4xl"
          >
            Submit Order(s)
          </Button>
        </div>
      </div>
    </div>
  );
};
