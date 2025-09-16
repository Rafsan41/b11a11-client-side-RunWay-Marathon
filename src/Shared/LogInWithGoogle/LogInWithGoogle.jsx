import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const LogInWithGoogle = () => {
  const { logInWitGoogle } = useContext(AuthContext);

  const handelgoogleLogIn = () => {
    logInWitGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div>
      <div>
        <div className="divider">OR</div>
        <div>
          <button
            onClick={handelgoogleLogIn}
            className="relative w-full h-[45px] border-none rounded-full font-semibold cursor-pointer overflow-hidden z-10">
            <span className="absolute top-[-100%] left-0 h-[300%] w-full bg-gradient-to-b from-[#1873CC] via-[#337ae4] to-[#25252b] transition-all duration-500 -z-10 hover:top-0"></span>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogInWithGoogle;
