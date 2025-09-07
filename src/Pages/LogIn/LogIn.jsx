import React, { useState } from "react";
import { NavLink } from "react-router";

const LogIn = () => {
  const [active, setActive] = useState(false);

  const handelgoogleLogIn = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div
        className={`relative w-full min-h-screen    overflow-hidden ${
          active ? "active" : ""
        }`}>
        {/* Curved Shapes */}
        <div
          className={`absolute right-0 -top-1 h-[600px] w-[850px] bg-gradient-to-br from-[#25252b] to-[#339de4af] origin-bottom-right transition-transform duration-[1500ms] ease-in-out delay-[1600ms] ${
            active
              ? "rotate-0 skew-y-0 delay-[500ms]"
              : "rotate-[10deg] skew-y-[40deg]"
          }`}></div>

        <div
          className={`absolute left-[250px] top-full h-[700px] w-[850px] bg-[#25252b] border-t-[3px] border-orange-600 origin-bottom-left transition-transform duration-[1500ms] ease-in-out delay-[500ms] ${
            active
              ? "rotate-[-11deg] skew-y-[-41deg] delay-[1200ms]"
              : "rotate-0 skew-y-0"
          }`}></div>

        {/* Login Box */}
        <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-10">
          <h2 className="text-5xl text-center font-semibold">Login</h2>
          <form className="mt-5 space-y-10">
            <div className="relative">
              <input
                type="text"
                name="email"
                required
                className="w-full border-b-2  bg-transparent outline-none  font-semibold pr-6 focus:border-blue-500 peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2  transition-all peer-focus:top-[-5px] peer-focus:text-blue-500 peer-valid:top-[-5px] peer-valid:text-orange-600">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                required
                className="w-full border-b-2  bg-transparent outline-none  font-semibold pr-6 focus:border-blue-500 peer"
              />
              <label className="absolute left-0 top-1/2 -translate-y-1/2  transition-all peer-focus:top-[-5px] peer-focus:text-blue-500 peer-valid:top-[-5px] peer-valid:text-orange-600">
                Password
              </label>
            </div>

            <button
              type="submit"
              className="relative w-full h-[45px] border-none rounded-full font-semibold cursor-pointer overflow-hidden z-10">
              <span className="absolute top-[-100%] left-0 h-[300%] w-full bg-gradient-to-b from-[#25252b] via-[#337ae4] to-[#25252b] transition-all duration-500 -z-10 hover:top-0"></span>
              Log In
            </button>

            <div className="text-lg text-center">
              <p>
                Don't have an account? <br />
                <button
                  type="button"
                  onClick={() => setActive(true)}
                  className="text-orange-600 font-semibold hover:underline">
                  <NavLink to="/signIn">Sign In</NavLink>
                </button>
                <p>OR</p>
                <button
                  onClick={handelgoogleLogIn}
                  className="relative w-full h-[45px] border-none rounded-full font-semibold cursor-pointer overflow-hidden z-10">
                  <span className="absolute top-[-100%] left-0 h-[300%] w-full bg-gradient-to-b from-[#25252b] via-[#337ae4] to-[#25252b] transition-all duration-500 -z-10 hover:top-0"></span>
                  Sign In With Google
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Info Content (Login side) */}
        <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center text-right px-10">
          <h2 className="uppercase text-6xl leading-snug font-bold">
            Welcome Back !
          </h2>
          <p className="mt-3 text-xl">
            We are happy to have you with us again. If you need anything, we are
            here to help.
          </p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
