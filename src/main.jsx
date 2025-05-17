import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import Router from "./routes";
import "@fontsource-variable/oswald";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <Router />
  </HeroUIProvider>
);
