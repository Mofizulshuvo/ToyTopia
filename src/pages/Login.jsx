import React, { use, useContext, useState } from "react";
import { signOut } from "firebase/auth"; 
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config"; 
import AuthContext from "../Contex/AuthContext";
import { Helmet } from "react-helmet";

const Login = () => {
  const {
    user,
    setUser,
    setForgotEmail,
    signInWithEmailAndPasswordFunction,
    signInwithPopupFunction,
    logOut,
  } = useContext(AuthContext);

  const location=useLocation();
  console.log(location.state);

  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    signInWithEmailAndPasswordFunction(emailInput, password)
      .then(async (res) => {
        if (!res.user.emailVerified) {
          await signOut(auth);
          toast("Please verify your email before logging in.");
        } else {
          toast("Logged in Successfully!");

          setUser(res.user);
          navigate(location.state || "/");
        }
      })
      .catch((error) => toast(error.message));
  };

  const handleGoogleLogin = () => {
    signInwithPopupFunction()
      .then(() => {
        toast("Logged in with Google Successfully!");
        setUser(auth.currentUser);
         navigate(location.state || "/");
      })
      .catch((error) => toast(error.message));
  };

  if (user) {
    return (
      <div className="card bg-base-100 w-full max-w-md mx-auto my-10 shadow-xl">
        <div className="card-body text-center">
          <img
            src={user.photoURL || "https://via.placeholder.com/100"}
            alt="User"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold mt-3">
            Welcome, {user.displayName || user.email}!
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <button onClick={logOut} className="btn btn-error text-white mt-5 w-full">
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>ToyTopia | Login</title>
      </Helmet>
      <form onSubmit={handleLogin}>
        <div className="card bg-base-100 w-full max-w-md mx-auto my-10 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />

              <label className="label mt-3">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn bg-[#ff8800] hover:bg-orange-600 text-white mt-5 w-full"
              >
                Login
              </button>

              <div className="text-center mt-2 ">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 link link-hover"
                  onClick={() => setForgotEmail(emailInput)}
                >
                  Forgot Password?
                </Link>
                <Link
                  to="/signup"
                  className="text-sm text-black link link-hover ml-4"
                >
                  New User? <span className="text-[#ff8800] font-semibold">Sign Up</span>
                </Link>
              </div>
            </fieldset>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary w-full"
            >
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
