import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WatchStoreProvider from "./context/WatchStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WatchStoreProvider>
      <App />
    </WatchStoreProvider>
  </React.StrictMode>
);
