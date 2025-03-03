import { CartMolecule } from "@atoms/CartMolecule";
import { cn } from "@cloudeats/robin-components";
import { CTA } from "@components/CTA/CTA";
import { useMolecule } from "bunshi/react";
import { useAtomValue } from "jotai";
import { href, Link } from "react-router";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import landing3 from "../../assets/landing3.png";

const dishes = [
  { id: 1, name: "Dish Food 1", price: "₱ 249.00", image: landing1 },
  {
    id: 2,
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing2,
  },
  {
    id: 3,
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing3,
  },
  {
    id: 4,
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing1,
  },
  {
    id: 5,
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing2,
  },
  {
    id: 6,
    name: "Umami Burger (Must Try!)",
    price: "₱ 249.00",
    image: landing3,
  },
];

export const MenuPage = () => {
  const { cartAtom } = useMolecule(CartMolecule);
  const cart = useAtomValue(cartAtom);
  return (
    <div className={cn("container mx-auto px-4 py-8")}>
      <h2 className="mb-6 text-2xl font-bold">⭐ Best Sellers</h2>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish, index) => (
          <li key={dish.id}>
            <Link to={href("/dish/:id", { id: dish.id.toString() })}>
              <div className="relative">
                <img
                  alt=""
                  className="h-80 rounded-2xl object-cover"
                  src={dish.image}
                />
                <div
                  className={
                    "border-primary-500 bg-primary-50 absolute -right-5 bottom-0 flex h-20 w-20 items-center justify-center rounded-full border-4 text-4xl"
                  }
                >
                  {index + 1}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{dish.name}</h3>
                <p className="text-xl font-semibold">{dish.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {cart?.length > 0 && <CTA />}
    </div>
  );
};

export default MenuPage;
