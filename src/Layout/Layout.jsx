import { Outlet } from "react-router";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";

const Layout = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div data-theme={theme ? "light" : "dark"}>
      <NavBar theme={theme} setTheme={setTheme}></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
