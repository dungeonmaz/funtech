import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/index.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
