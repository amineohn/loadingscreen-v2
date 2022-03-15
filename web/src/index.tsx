import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Index from "./pages";
import { VisibilityProvider } from "./providers/VisibilityProvider";

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <Index />
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
