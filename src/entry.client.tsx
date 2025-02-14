import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

(async () => {
  const LDProvider = await asyncWithLDProvider({
    clientSideID: "67ad9daad0ba970cabdf3a8f",
    timeout: 5,
  });
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <LDProvider>
          <HydratedRouter />
        </LDProvider>
      </StrictMode>
    );
  });
})();
