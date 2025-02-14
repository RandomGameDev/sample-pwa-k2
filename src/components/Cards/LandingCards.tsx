import { cn } from "@cloudeats/robin-components";
import { Link } from "react-router";
import card1 from "../../assets/card1.jpg";

export const LandingCards = () => {
  return (
    <div className={cn("px-4 py-6")}>
      <Link to="/menu">
        <img
          className="h-48 w-full rounded-t-lg object-cover"
          alt="Sulit Chicken"
          src={card1}
        />
        <div className="flex flex-col justify-between rounded-lg p-4 text-left shadow-lg">
          <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">Sulit Chicken</h2>
            <button className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold hover:bg-yellow-700">
              <span className="text-lg">&gt;</span>
            </button>
          </div>
          <p className="text-gray-600">
            Enjoy the best flavored fried chicken na todo sulit, todo sarap!
          </p>
        </div>
      </Link>
    </div>
  );
};
