/* This code snippet is a JavaScript React application that is using React for building user
interfaces. Here is a breakdown of what each part of the code is doing: */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  /* The code snippet `<React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>` is using React's `StrictMode` component to enable a set of checks and
  warnings for potential issues in the application. */
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
