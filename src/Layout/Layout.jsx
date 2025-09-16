import { Outlet, useLocation } from "react-router";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
  const [theme, setTheme] = useState(true);
  const location = useLocation();

  return (
    <div data-theme={theme ? "light" : "dark"}>
      <NavBar theme={theme} setTheme={setTheme} />

      {/* AnimatePresence handles route transitions */}
      <AnimatePresence>
        <motion.div
          key={location.pathname} // 👈 ensures animation triggers on route change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.1 }}>
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
