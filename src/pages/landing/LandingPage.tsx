import { cn, RobinMain } from "@cloudeats/robin-components";

export const LandingPage = () => {
  return (
    <div className={cn("px-4 py-6")}>
      <h2 className={cn("text-heading-sm mb-2 text-center text-[#1B1B1B]")}>
        Order from multiple brands
      </h2>
      <h3
        className={cn("text-body-m-semibold mb-5 text-center text-neutral-500")}
      >
        Check out all in one go!
      </h3>
      <RobinMain>Rando</RobinMain>
    </div>
  );
};
