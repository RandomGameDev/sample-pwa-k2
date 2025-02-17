import { cn } from "@cloudeats/robin-components";
import { useState } from "react";
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
  const [clickCounts, setClickCounts] = useState({});

  const handleClick = (index: number) => {
    setClickCounts((prevClickCounts) => {
      const newClickCounts = { ...prevClickCounts };
      newClickCounts[index] = (newClickCounts[index] || 0) + 1;
      return newClickCounts;
    });
  };

  return (
    <div className={cn("container mx-auto px-4 py-8")}>
      <h2 className="mb-6 text-2xl font-bold">⭐ Best Sellers</h2>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dishes, index) => (
          <li key={index}>
            <div className="relative" onClick={() => handleClick(index)}>
              <img
                alt=""
                className="h-80 rounded-2xl object-cover"
                src={dishes.image}
              />
              {clickCounts[index] && (
                <div
                  className="absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"
                  style={{ fontSize: 24 }}
                >
                  {clickCounts[index]}
                </div>
              )}
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
