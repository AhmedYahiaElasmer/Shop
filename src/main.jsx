import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

import "primeicons/primeicons.css";
import "../node_modules/primeflex/primeflex.css";
import "../node_modules/primeflex/themes/primeone-light.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);
