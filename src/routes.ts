import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main/index.tsx", [
    index("./pages/landing/index.tsx"),
    route("/menu", "./pages/menu/index.tsx"),
  ]),
] satisfies RouteConfig;
