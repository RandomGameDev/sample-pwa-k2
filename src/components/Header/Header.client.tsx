import { cn } from "@cloudeats/robin-components";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Link } from "react-router";

export const Header = () => {
  const { sampleBrand } = useFlags();

  return (
    <nav
      className={cn(
        "bg-primary-500 h-[46px] pt-1 text-center text-3xl font-bold text-black"
      )}
    >
      <Link to="/">{sampleBrand}</Link>
    </nav>
  );
};
