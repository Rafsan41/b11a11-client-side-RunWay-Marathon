import { createBrowserRouter } from "react-router";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Registation from "../Pages/Registation/Registation";
import LogIn from "../Pages/LogIn/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "/", componant: Home },
      { path: "/logIn", componant: LogIn },
      { path: "/register", componant: Registation },
    ],
  },
]);
export default router;
