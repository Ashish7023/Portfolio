import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CursorProvider from "./Context/CursorProvider";
import Cursor from "./Context/Cursor";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <CursorProvider>
      <App />
      <Cursor/>
    </CursorProvider>
  </>
);
