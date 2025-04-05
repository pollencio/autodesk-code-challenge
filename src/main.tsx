import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { Providers } from "./components/providers.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
    <Toaster />
  </StrictMode>,
);
