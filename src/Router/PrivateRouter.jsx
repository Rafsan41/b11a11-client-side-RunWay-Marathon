import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className=" text-center mt- min-h-96 container">
        <span className="loading loading-bars loading-xl center"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/logIn" state={location.pathname}></Navigate>;
  }

  return children;
};
export default PrivateRouter;
