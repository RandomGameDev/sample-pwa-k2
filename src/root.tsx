import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./app.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/src/assets/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cloudeats</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

export function HydrateFallback() {
  return <p></p>;
}

export default function App() {
  return <Outlet />;
}
