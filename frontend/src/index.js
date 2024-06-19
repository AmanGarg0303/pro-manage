import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ActiveAuthProvider } from "./providers/activeAuthComp";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Roboto, sans-serif",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActiveAuthProvider>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </ActiveAuthProvider>
  </React.StrictMode>
);
