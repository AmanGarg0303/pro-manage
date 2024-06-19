import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActiveAuthProvider } from "./providers/activeAuthComp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveAuthProvider>
      <App />
    </ActiveAuthProvider>
  </React.StrictMode>
);
