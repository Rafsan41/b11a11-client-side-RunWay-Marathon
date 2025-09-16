import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Registation = () => {
  const [active, setActive] = useState(false);

  const { creatUser } = useContext(AuthContext);

  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // creat user
    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <div className="relative w-full min-h-screen  overflow-hidden">
          {/* Curved Shapes */}
          <div
            className={`absolute right-0 -top-1 h-[600px] w-[850px] bg-gradient-to-br from-[#8b5742] to-[#FFA07A] origin-bottom-right transition-transform duration-[1500ms] ease-in-out delay-[1600ms] ${
              active
                ? "rotate-0 skew-y-0 delay-[500ms]"
                : "rotate-[10deg] skew-y-[40deg]"
            }`}></div>

          <div
            className={`absolute left-[250px] top-full h-[700px] w-[850px] bg-[#25252b] border-t-[3px]  origin-bottom-left transition-transform duration-[1500ms] ease-in-out delay-[500ms] ${
              active
                ? "rotate-[-11deg] skew-y-[-41deg] delay-[1200ms]"
                : "rotate-0 skew-y-0"
            }`}></div>

          {/* Register Box */}
          <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center px-10">
            <h2 className="text-5xl text-center font-semibold mb-10">
              Sign In
            </h2>
            <form onSubmit={handelRegister} className="mt-5 space-y-15">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-b-3  bg-transparent outline-none  font-semibold pr-6 focus:border-orange-600 peer"
                />
                <label className="absolute left-0 top-1/2  text-2xl -translate-y-1/2  transition-all peer-focus:top-[-15px] peer-focus:text-orange-600 peer-valid:top-[-15px] peer-valid:text-orange-600">
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full border-b-3  bg-transparent outline-none font-semibold pr-6 focus:border-orange-600 peer"
                />
                <label className="absolute left-0 top-1/2  text-2xl -translate-y-1/2  transition-all peer-focus:top-[-15px] peer-focus:text-orange-600 peer-valid:top-[-15px] peer-valid:text-orange-600">
                  Password
                </label>
              </div>

              <button
                type="submit"
                className="relative w-full h-[45px] border-none rounded-full font-semibold cursor-pointer overflow-hidden z-10">
                <span className="absolute top-[-100%] left-0 h-[300%] w-full bg-gradient-to-b from-[#FFA07A] via-[#e46033] to-[#926b46] transition-all duration-500 -z-10 hover:top-0"></span>
                Sign In
              </button>
            </form>
            <div className="text-lg text-center">
              <p>
                Already have an account? <br />
                <button
                  type="button"
                  onClick={() => setActive(false)}
                  className="text-blue-500 font-semibold hover:underline">
                  <NavLink to="/logIn">Log In</NavLink>
                </button>
              </p>
            </div>
          </div>

          {/* Info Content (Register side) */}
          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center text-left px-10">
            <h2 className="uppercase text-6xl font-bold leading-snug">
              Welcome . . .
            </h2>
            <p className="mt-3 text-xl">
              We’re delighted to have you here. If you need any assistance, feel
              free to reach out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registation;
