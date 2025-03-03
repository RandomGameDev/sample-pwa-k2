import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/mainlayout.client.tsx", [
    layout("./layouts/home.tsx", [
      index("./routes/home/index.client.tsx"),
      route("menu", "./routes/menu/index.tsx"),
    ]),

    route("dish/:id", "./routes/dish/index.client.tsx"),
    route("cart", "./routes/cart/index.tsx"),

    ...prefix("order", [
      route(":id", "./routes/order/index.tsx"),
      route(":id/details", "./routes/order-details/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
