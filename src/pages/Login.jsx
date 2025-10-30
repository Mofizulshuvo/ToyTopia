import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { Link } from "react-router";

const GoogleProvider = new GoogleAuthProvider();

const Login = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password); // Handle login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        if (res.user.emailVerified === false) {
          await signOut(auth); // block access
          toast("Please verify your email before logging in.");
        } else {
          toast("Logged in Successfully!");
          setUser(res.user);
        }
      })
      .catch((error) => {
        toast("Error 404!");
        const errorCode = error.code;
        toast(errorCode);
      });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");

    signInWithPopup(auth, GoogleProvider)
      .then(() => {
        toast("Logged in with Google Successfully!");
        setUser(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        toast(errorCode);
      });
  };

  if (user) {
    return (
      <div className="card bg-base-100 w-full max-w-md mx-auto my-10 shadow-xl">
        <div className="card-body text-center">
          <img src={user.photoURL} alt="" />
          <h2 className="text-2xl font-semibold">
            Welcome, {user.displayName}!
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <button
            onClick={() => setUser(null)}
            className="btn btn-error text-white mt-5"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto my-10">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input  w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
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
              <div className="text-center mt-2">
                <Link to="/forgot-password" className="text-sm text-blue-500 link link-hover ">
                  Forgot Password?
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
