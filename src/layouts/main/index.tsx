import { cn } from "@cloudeats/robin-components";
import { Header } from "@components/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="bg-purple-1 h-screen">
      <Header />
      <div className="mx-4 mt-6 mb-4 flex flex-col gap-2">
        <h2 className={cn("prose-heading-sm text-center text-neutral-800")}>
          Order from multiple brands
        </h2>
        <h3
          className={cn("prose-body-m-semibold text-center text-neutral-500")}
        >
          Check out all in one go!
        </h3>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
