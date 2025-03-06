import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import "./app.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="apple-touch-icon" href="/pwa-192x192.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="mask-icon" href="/vite.svg" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <title>Cloudeats</title>
        <link rel="manifest" href="/manifest.json" />
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
