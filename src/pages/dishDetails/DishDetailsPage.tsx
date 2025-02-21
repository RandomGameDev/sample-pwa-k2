import { Button } from "@components/Button/Button";
import { cn } from "@cloudeats/robin-components";
import { useState } from "react";
import landing1 from "../../assets/landing1.png";

interface Addon {
  id: number;
  name: string;
  price: number;
}

const addons: Addon[] = [
  { id: 1, name: "Sulit Chicken", price: 99.99 },
  { id: 2, name: "Todo Sarap Burger", price: 129.99 },
  { id: 3, name: "Fried Rice", price: 49.99 },
  { id: 4, name: "Soft Drink", price: 29.99 },
];

const originalPrice = 249; // Original price of the dish

export const DishDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [totalPrice, setTotalPrice] = useState(originalPrice * quantity); // initial price

  const handleCheckboxChange = (addon: Addon) => {
    if (selectedAddons.some((a) => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter((a) => a.id !== addon.id));
      setTotalPrice(totalPrice - addon.price * quantity);
    } else {
      setSelectedAddons([...selectedAddons, addon]);
      setTotalPrice(totalPrice + addon.price * quantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={cn("px-0 py-6")}>
      <img
        src={landing1}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          aspectRatio: "1/1",
        }}
      />
      <div className={cn("px-4 py-2")}>
        <div className="my-4 flex items-end justify-between">
          <h1 className="text-4xl">Premium Soy Garlic Karaage</h1>
          <span className="text-4xl">₱ {originalPrice}</span>
        </div>
        <p className="my-4 text-2xl text-neutral-500">
          This will be the part where the description of the food will display
          but we will still need to confirm up to how many characters this is.
        </p>
        <p className="my-4">
          Add-ons{" "}
          <span className={cn("text-neutral-500")}>(optional, max 5)</span>:
        </p>
        {addons.map((addon) => (
          <div
            key={addon.id}
            className={cn("addons-center my-4 flex justify-between")}
          >
            <div className={cn("addons-center flex justify-between gap-2")}>
              <div className={cn("flex items-center gap-4")}>
                <input
                  type="checkbox"
                  className={cn("h-4 w-4")}
                  checked={selectedAddons.includes(addon)}
                  onChange={() => handleCheckboxChange(addon)}
                />
                <span className={cn("text-xl")}>{addon.name}</span>
              </div>
            </div>
            <span className={cn("text-xl")}>+₱{addon.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className={cn("px-4 py-2")}>
        <p className="my-2 text-2xl">
          Remarks <span className={cn("text-neutral-500")}>(Optional)</span>:
        </p>
        <textarea
          className={cn(
            "h-20 w-full rounded-md border border-neutral-300 pt-2 pr-4 pl-4 text-xl"
          )}
          placeholder="Please remove onions if there are any."
        />
      </div>
      <div className={cn("shadow-t py-6 shadow-lg")}>
        <div className={cn("flex items-center justify-center gap-6")}>
          <Button
            className={cn(
              "bg-primary-500 hover:bg-primary-700 h-20 w-20 rounded-full text-4xl"
            )}
            onClick={handleDecrement}
          >
            -
          </Button>
          <span className={cn("text-4xl font-semibold")}>{quantity}</span>
          <Button
            className={cn(
              "bg-primary-500 hover:bg-primary-700 h-20 w-20 rounded-full text-4xl"
            )}
            onClick={handleIncrement}
          >
            +
          </Button>
        </div>
        <div className={cn("px-4 py-2")}>
          <Button className="border-primary-500 bg-primary-500 mt-4 w-full rounded-lg border-2 py-6 text-3xl text-black">
            Add to Basket - ₱ {(totalPrice * quantity).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};
