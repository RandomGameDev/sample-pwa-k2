import { Button } from "@components/Button/Button";
import { cn } from "@cloudeats/robin-components";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";

const OrderLineItem = ({ title, price, addon, remark, image }) => {
  return (
    <div className={cn("align-items-center flex py-4")}>
      <img className="mr-4 h-40 w-40 object-cover" alt="Dish" src={image} />
      <div className="ml-4 flex flex-1 flex-col">
        <div className="mb-4 flex justify-between">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <span className="text-4xl">{`₱ ${price}`}</span>
        </div>
        <div className="mb-4 flex justify-between">
          <p className="text-2xl">{`Add-ons: ${addon}`}</p>
          <span className="text-3xl">+₱ 30.00</span>
        </div>
        <div className="mb-4 flex justify-between">
          <div className="flex flex-col">
            <p className="text-2xl">Remarks:</p>
            <p className="text-2xl text-neutral-500">{`"${remark}"`}</p>
          </div>
          <div className="flex items-center justify-center rounded-full bg-neutral-200 px-2 py-0">
            <Button className="text-danger-500 rounded-full bg-transparent p-2 text-4xl">
              🗑️
            </Button>
            <span className="mx-2 text-4xl">1</span>
            <Button className="rounded-full bg-transparent p-2 text-4xl">
              +
            </Button>
          </div>
        </div>
        <div className="flex justify-start">
          <Button className="text-secondary-500 rounded-full bg-transparent text-2xl">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export const OrderLineItemCards = () => {
  const dishes = [
    {
      title: "Dish Food 1",
      price: 249,
      addon: "with Garlic Aioli Dip",
      remark: "Please remove onions if there are any.",
      image: landing1,
    },
    {
      title: "Dish Food 1",
      price: 249,
      addon: "with Extra Sliced Cheese",
      remark: "Please remove onions if there are any.",
      image: landing2,
    },
  ];

  return (
    <div className={cn("relative px-4 py-6")}>
      <h1 className={cn("text-4xl font-semibold")}>Sulit Chicken</h1>
      <hr className="my-4 border-2 border-b-neutral-100" />
      {dishes.map((dish, index) => (
        <OrderLineItem
          key={index}
          title={dish.title}
          price={dish.price}
          addon={dish.addon}
          remark={dish.remark}
          image={dish.image}
        />
      ))}
      <Button className="border-secondary-500 text-secondary-500 mt-4 w-full rounded-lg border-2 bg-transparent py-6 text-4xl">
        + Add more dishes
      </Button>
    </div>
  );
};
