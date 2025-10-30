import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";

const GoogleProvider = new GoogleAuthProvider();

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password); // Handle login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        toast("Logged in Successfully!");
        const user = res.user;
        // ...
      })
      .catch((error) => {
        toast("Error 404!");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");

    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    // Add Firebase or OAuth Google login here
  };

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
                <a className="link link-hover text-sm">Forgot password?</a>
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
