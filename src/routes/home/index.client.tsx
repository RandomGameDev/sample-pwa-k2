import { cn } from "@cloudeats/robin-components";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Link } from "react-router";
import landing1 from "../../assets/landing1.png";
import landing2 from "../../assets/landing2.png";
import landing3 from "../../assets/landing3.png";

const imagRandomizer = (index: number) => {
  const images = [landing1, landing2, landing3];

  return images[index % 3];
};

export const HomePage = () => {
  const { configBrands } = useFlags();
  return (
    <div className={cn("px-4 py-6")}>
      <ul className="flex flex-col gap-6">
        {Array.isArray(configBrands) &&
          configBrands?.map((configBrand, configBrandIndex) => {
            return (
              <li className="bg-purple-2 rounded-2xl shadow-lg">
                <Link to="/menu">
                  <img
                    src={imagRandomizer(configBrandIndex)}
                    className="h-30 rounded-t-2xl"
                  />
                  <div className="mr-30 space-y-2 px-2 py-3">
                    <p className="text-body-xl-semibold text-purple-4">
                      {configBrand["name"]}
                    </p>
                    <p className="text-body-s-semibold text-purple-3">
                      {configBrand["description"]}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
