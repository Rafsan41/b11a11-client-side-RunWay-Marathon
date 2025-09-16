import { NavLink } from "react-router";
import { WiDaySunny } from "react-icons/wi";
import { MdOutlineDarkMode } from "react-icons/md";
import logo1 from "../../assets/runway marathon loogo.png";
import logo2 from "../../assets/runway marathon white variant.png";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = ({ theme, setTheme }) => {
  const { user, logOutUser } = useContext(AuthContext);

  const handelLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  const links = (
    <>
      {" "}
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/allmarathons">All Marathon </NavLink>
      </li>
      <li>
        {" "}
        <NavLink>Add Marathon Event</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className="flex items-center  font-semibold font-serif  ">
            {theme ? (
              <>
                <img
                  src={logo1}
                  className=" w-16 h-16 object-cover  rounded-lg mx-2"
                  alt=""
                />
              </>
            ) : (
              <>
                <img
                  src={logo2}
                  className=" w-16 h-16 object-cover rounded-lg mx-2"
                  alt=""
                />
              </>
            )}
            <p className="text-4xl hidden lg:block"> RunWay Marathon</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          {user ? <p>{user.email}</p> : <></>}
          {user ? (
            <button
              onClick={handelLogOut}
              className="btn btn-accent font-semibold text-xl">
              Sign Out
            </button>
          ) : (
            <>
              <button className="btn text-xl">
                <NavLink to="/logIn">LogIn</NavLink>
              </button>
              <button className="btn text-xl">
                <NavLink to="/signIn">Sign In</NavLink>
              </button>
            </>
          )}
          <button onClick={() => setTheme(!theme)} className="btn btn-ghost">
            {theme ? <MdOutlineDarkMode size="25" /> : <WiDaySunny size="25" />}
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
