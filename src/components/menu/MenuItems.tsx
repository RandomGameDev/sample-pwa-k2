import { cn } from "@cloudeats/robin-components";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import landing3 from "../../assets/landing3.png";

const dishes = [
  { name: "Dish Food 1", price: "₱ 249.00", image: landing1 },
  {
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing2,
  },
  {
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing3,
  },
  {
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing1,
  },
  {
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing2,
  },
  {
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing3,
  },
];

export const MenuItems = () => {
  return (
    <div className={cn("container mx-auto px-4 py-8")}>
      <h2 className="mb-6 text-2xl font-bold">⭐ Best Sellers</h2>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dishes, index) => (
          <li key={index}>
            <div className="relative">
              <img
                alt=""
                className="h-80 rounded-2xl object-cover"
                src={dishes.image}
              />
              <div
                className={
                  "border-primary-500 bg-primary-50 absolute right-0 bottom-0 flex h-20 w-20 items-center justify-center rounded-full border-4 text-4xl"
                }
                style={{ right: "-20px" }}
              >
                {index + 1}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold">{dishes.name}</h3>
              <p className="text-xl font-semibold">{dishes.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
