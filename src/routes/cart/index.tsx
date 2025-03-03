import { cn } from "@cloudeats/robin-components";
import { Button } from "@components/Button/Button";
import { OrderLineItemCards } from "@components/Cards/OrderLineItemCards";
import { RadioGroup, RadioGroupItem } from "@components/RadioGroup";
import { useState } from "react";
import { useNavigate } from "react-router";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";

const PaymentSummary = ({ dishes, totalPrice }) => {
  return (
    <div>
      <p className="mt-6 mb-6 text-4xl">Payment Summary</p>
      <p className="mb-6 text-3xl">Subtotal</p>
      <div className="flex justify-between text-neutral-500">
        <div className="flex flex-col gap-2">
          {dishes.map(
            (dish: {
              title: string;
              quantity: number;
              price: number;
              addonPrice: number;
            }) => (
              <div key={dish.title} className="text-3xl">
                <span className="mr-2">{dish.quantity}x</span>
                {dish.title}
              </div>
            )
          )}
        </div>
        <div className="flex flex-col gap-2 text-3xl">
          {dishes.map(
            (dish: {
              title: string;
              quantity: number;
              price: number;
              addonPrice: number;
            }) => (
              <div key={dish.title}>
                ₱ {(dish.price + dish.addonPrice).toLocaleString()}
              </div>
            )
          )}
        </div>
      </div>
      <hr className="my-4 border-4 border-b-neutral-100" />
      <div className="mt-6 mb-6 flex justify-between text-4xl">
        <p>
          Total{" "}
          <span className={cn("text-neutral-400")}>(inclusive of Tax)</span>:
        </p>
        <p>₱ {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
};

export const CartPage = () => {
  const navigate = useNavigate();
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
  const [selectedDiningOption, setSelectedDiningOption] = useState<
    string | null
  >(null);

  const handleDiningOptionChange = (value: string) => {
    setSelectedDiningOption(value);
  };

  const totalPrice = dishes.reduce(
    (acc, dish) => acc + dish.price + dish.addonPrice,
    0
  );

  const [showSummary, setShowSummary] = useState(false);

  const handleSeeSummary = () => {
    setShowSummary(true);
  };

  const handleCloseSummary = () => {
    setShowSummary(false);
  };

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
              checked={selectedDiningOption === option}
              onClick={() => handleDiningOptionChange(option)}
              label={option}
              labelClassName="text-2xl"
            />
          ))}
        </RadioGroup>
        {selectedDiningOption === "Take-Out" && (
          <div className="mt-4 flex justify-between">
            <p className="text-2xl">Request for cutlery?</p>
          </div>
        )}
        <hr className="my-4 border-4 border-b-neutral-100" />
        <PaymentSummary dishes={dishes} totalPrice={totalPrice} />
        <Button
          className="text-secondary-500 mb-6 bg-transparent text-2xl"
          style={{ cursor: "pointer" }}
          onClick={handleSeeSummary}
        >
          See summary
        </Button>
        {showSummary && (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-transparent transition duration-500 ease-in-out"
            onClick={handleCloseSummary}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Escape" || event.key === " ") {
                handleCloseSummary();
              }
            }}
          >
            <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-500 opacity-50 transition duration-500 ease-in-out" />
            <div className="fixed right-0 bottom-0 left-0 rounded-tl-2xl rounded-tr-2xl bg-white p-4 shadow-md transition duration-500 ease-in-out">
              <div className={cn("relative px-4 py-6")}>
                <PaymentSummary dishes={dishes} totalPrice={totalPrice} />
              </div>
            </div>
          </div>
        )}
        <div className="mt-6">
          <Button
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/order/1")}
            className={
              selectedDiningOption === null
                ? "border-primary-300 bg-primary-300 text-primary-600 pointer-events-none mt-4 w-full rounded-lg border-2 py-8 text-4xl"
                : "bg-primary-500 hover:bg-primary-400 mt-4 w-full rounded-lg border-2 border-transparent py-8 text-4xl text-black"
            }
          >
            Submit Order(s)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
