import { cn } from "@cloudeats/robin-components";
import { useEffect } from "react";
import { Link } from "react-router";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import landing3 from "../../assets/landing3.png";

export const LandingPage = () => {
  useEffect(() => {}, []);
  return (
    <div className={cn("px-4 py-6")}>
      <ul className="flex flex-col gap-6">
        <li className="bg-purple-2 rounded-2xl shadow-lg">
          <Link to="/menu">
            <img src={landing1} className="h-30 rounded-t-2xl" />
            <div className="mr-30 space-y-2 px-2 py-3">
              <p className="text-body-xl-semibold text-purple-4">
                Sulit Chicken
              </p>
              <p className="text-body-s-semibold text-purple-3">
                Enjoy the best flavored fried chicken na todo sulit, todo sarap!
              </p>
            </div>
          </Link>
        </li>
        <li className="bg-purple-2 rounded-2xl shadow-lg">
          <Link to="/menu">
            <img src={landing2} className="h-30 rounded-t-2xl" />
            <div className="mr-30 space-y-2 px-2 py-3">
              <p className="text-body-xl-semibold text-purple-4">
                Burger Beast
              </p>
              <p className="text-body-s-semibold text-purple-3">
                Feed your inner beast with Umami-packed gourmet burgers crafted
                for your every craving
              </p>
            </div>
          </Link>
        </li>
        <li className="bg-purple-2 rounded-2xl shadow-lg">
          <Link to="/menu">
            <img src={landing3} className="h-30 rounded-t-2xl" />
            <div className="mr-30 space-y-2 px-2 py-3">
              <p className="text-body-xl-semibold text-purple-4">
                Sulit Chicken
              </p>
              <p className="text-body-s-semibold text-purple-3">
                Enjoy the best flavored fried chicken na todo sulit, todo sarap!
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
