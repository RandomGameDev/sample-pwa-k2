import { Header } from "@components/Header/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
