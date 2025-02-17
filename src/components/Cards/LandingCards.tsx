import { Button } from "../Button/Button.tsx";
import { cn } from "@cloudeats/robin-components";
import { Link } from "react-router";
import card1 from "../../assets/card1.jpg";

export const LandingCards = () => {
  return (
    <div className={cn("relative px-4 py-6")}>
      <img
        className="h-48 w-full rounded-t-lg object-cover"
        alt="Sulit Chicken"
        src={card1}
      />
      <div className="flex flex-col justify-between rounded-lg p-4 text-left shadow-lg">
        <div className="group flex justify-between">
          <div className="ltr:ml-3">
            <h2 className="text-2xl font-semibold">Sulit Chicken</h2>
            <p className="text-gray-600">
              Enjoy the best flavored fried chicken na todo sulit, todo sarap!
            </p>
          </div>
          <Link to="/menu">
            <Button variant={"warning"} style={{ cursor: "pointer" }}>
              <span className="text-lg">&gt;</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
