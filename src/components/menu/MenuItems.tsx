import { cn } from "@cloudeats/robin-components";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import landing3 from "../../assets/landing3.png";

export const MenuItems = () => {
  return (
    <div className={cn("container mx-auto px-4 py-8")}>
      <h2 className="mb-6 text-2xl font-bold">⭐ Best Sellers</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img
            src={landing1}
            alt="Dish Food 1"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Dish Food 1</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
        <div>
          <img
            src={landing2}
            alt="Umami Burger"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Umami Burger (Must Try!)</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
        <div>
          <img
            src={landing3}
            alt="Umami Burger"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Umami Burger (Must Try!)</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
        <div>
          <img
            src={landing1}
            alt="Umami Burger"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Umami Burger (Must Try!)</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
        <div>
          <img
            src={landing2}
            alt="Umami Burger"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Umami Burger (Must Try!)</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
        <div>
          <img
            src={landing3}
            alt="Umami Burger"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Umami Burger (Must Try!)</h3>
            <p className="text-gray-600">₱ 249.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};
