import { Outlet } from "react-router";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import Home from "../Pages/Home/Home";

const Layout = () => {
  const [theme, setTheme] = useState(true);

  return (
    <div data-theme={theme ? "light" : "dark"}>
      <NavBar theme={theme} setTheme={setTheme}></NavBar>
      <Outlet>
        <Home></Home>
      </Outlet>
      <Footer theme={theme}></Footer>
    </div>
  );
};
export default Layout;
