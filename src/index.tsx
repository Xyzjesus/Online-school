import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { HashRouter } from "react-router-dom";
import { ContextProvider } from "context";
import CssBaseline from "@mui/material/CssBaseline";
import "translations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <HashRouter>
      <ContextProvider>
          <App />
      </ContextProvider>
    </HashRouter>
  </React.StrictMode>
);


