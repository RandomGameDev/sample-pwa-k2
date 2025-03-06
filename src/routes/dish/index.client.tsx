import { CartMolecule } from "@atoms/CartMolecule";
import { cn, Typography } from "@cloudeats/robin-components";
import { Button } from "@components/Button/Button";
import { RadioGroup, RadioGroupItem } from "@components/RadioGroup";
import { useMolecule } from "bunshi/react";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { href, useNavigate } from "react-router";
import landing1 from "../../assets/landing1.png";
import type { Route } from "./+types/index.client";

interface Addon {
  id: number;
  name: string;
  price: number;
}

const dipOptions = [
  { label: "Garlic Aioli Dip", price: 10.0 },
  { label: "Blue Cheese Dip", price: 20.0 },
];

const addons: Addon[] = [
  { id: 1, name: "Sulit Chicken", price: 99.99 },
  { id: 2, name: "Todo Sarap Burger", price: 129.99 },
  { id: 3, name: "Fried Rice", price: 49.99 },
  { id: 4, name: "Soft Drink", price: 29.99 },
];

const originalPrice = "249.00"; // Original price of the dish

export const DishPage = ({ params }: Route.ComponentProps) => {
  const { cartAtom } = useMolecule(CartMolecule);
  const setCart = useSetAtom(cartAtom);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [totalPrice, setTotalPrice] = useState(
    parseInt(originalPrice) * quantity
  ); // initial price
  const navigate = useNavigate();

  const handleRadioChange = (option) => {
    const currentPrice =
      dipOptions.find((o) => o.label === selectedRadio)?.price ?? 0;
    setTotalPrice(totalPrice - currentPrice + option.price);
    setSelectedRadio(option.label);
  };

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

  const handleAdd = () => {
    setCart((prevValue) => [...prevValue, parseInt(params.id)]);
    navigate(href("/menu"));
  };

  return (
    <div>
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
          <Typography variant="body-xl-semibold" className="text-neutral-900">
            Premium Soy Garlic Karaage
          </Typography>
          <Typography
            variant="body-xl-semibold"
            className="text-neutral-900"
            as="span"
          >
            ₱ {originalPrice}
          </Typography>
        </div>
        <p className="my-4 text-2xl text-neutral-500">
          This will be the part where the description of the food will display
          but we will still need to confirm up to how many characters this is.
        </p>
        <p className="my-4">
          Select a Dip <span className={cn("text-neutral-500")}>(Pick 1)</span>:
        </p>
        <RadioGroup>
          {dipOptions.map((option) => (
            <div
              key={option.label}
              className={cn("addons-center flex justify-between")}
            >
              <div className={cn("addons-center flex justify-between gap-2")}>
                <div className={cn("flex items-center gap-1")}>
                  <RadioGroupItem
                    value={option.label}
                    checked={selectedRadio === option.label}
                    onClick={() => handleRadioChange(option)}
                    label={""}
                  />
                  <span className={cn("text-xl")}>{option.label}</span>
                </div>
              </div>
              <span className={cn("text-xl")}>+₱{option.price.toFixed(2)}</span>
            </div>
          ))}
        </RadioGroup>
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
          <Button
            className="border-primary-500 bg-primary-500 mt-4 w-full rounded-lg border-2 py-6 text-3xl text-black"
            onClick={handleAdd}
          >
            Add to Basket - ₱ {(totalPrice * quantity).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DishPage;
