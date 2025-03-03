import { cn } from "@cloudeats/robin-components";
import { Header } from "@components/Header";
import { useFlags } from "launchdarkly-react-client-sdk";
import { Outlet } from "react-router";

const MainLayout = () => {
  const { configTheme } = useFlags();

  return (
    <div className={cn("h-screen", configTheme)}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
