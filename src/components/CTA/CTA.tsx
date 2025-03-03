import { Icon } from "@cloudeats/robin-components";
import { useNavigate } from "react-router";

export const CTA = () => {
  const navigate = useNavigate();
  return (
    <button
      className="bg-primary-500 fixed right-4 bottom-4 flex size-20 items-center justify-center rounded-full text-black"
      onClick={() => navigate("/cart")}
    >
      <Icon icon="Basket" size="md" />
    </button>
  );
};
