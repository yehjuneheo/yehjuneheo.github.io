import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LangProvider } from "./context/Context";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <LangProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </LangProvider>
  </HashRouter>
);
