import { Button } from "../Button/Button.tsx";
import { cn } from "@cloudeats/robin-components";
import { Link } from "react-router";
import card1 from "../../assets/card1.jpg";

export const LandingCards = () => {
  return (
    <div className={cn("relative px-4 py-6")}>
      <img
        className="h-48 w-full rounded-t-4xl object-cover"
        alt="Sulit Chicken"
        src={card1}
      />
      <div className="flex flex-col justify-between rounded-4xl p-4 text-left shadow-lg">
        <div className="flex items-center">
          <h2 className={cn("text-2xl font-semibold")}>Sulit Chicken</h2>
          <Link to="/menu" className="ml-auto">
            <Button
              variant="primary"
              style={{ cursor: "pointer" }}
              className="aspect-square"
            >
              <span className="text-lg">&gt;</span>
            </Button>
          </Link>
        </div>
        <p className={cn("text-body-s-semibold text-neutral-500")}>
          Enjoy the best flavored fried chicken na todo sulit, todo sarap!
        </p>
      </div>
    </div>
  );
};
