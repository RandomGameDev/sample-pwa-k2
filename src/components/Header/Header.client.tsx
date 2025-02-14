import { cn } from "@cloudeats/robin-components";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Link } from "react-router";

export const Header = () => {
  const { sampleBrand } = useFlags();

  return (
    <nav
      className={cn(
        "bg-purple-4 text-purple-1 h-[46px] pt-1 text-center text-3xl font-bold"
      )}
    >
      <Link to="/">{sampleBrand}</Link>
    </nav>
  );
};
