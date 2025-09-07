import { createBrowserRouter } from "react-router";

import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Registation from "../Pages/Registation/Registation";
import LogIn from "../Pages/LogIn/LogIn";
import AllMarathons from "../Pages/AllMarathons/AllMarathons";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "/allmarathons", Component: AllMarathons },
      { path: "/logIn", Component: LogIn },
      { path: "/signIn", Component: Registation },
    ],
  },
]);
export default router;
