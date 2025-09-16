import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import router from "./Router/Router.jsx";
import AuthPorvider from "./Context/AuthPorvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthPorvider>
      <RouterProvider router={router} />
    </AuthPorvider>
  </StrictMode>
);
