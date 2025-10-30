import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
const provider = new GoogleAuthProvider();

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password); // Handle signup logic here

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast("User created successfully!");
        const user = res.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast("Error 404!");
      });
  };

  const handleGoogleSignUp = () => {
    console.log("Google signup clicked");
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    // Add Firebase or OAuth Google signup logic here
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mx-auto my-10">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Your name"
                required
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
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
                Sign Up
              </button>

              <div className="text-center mt-3 text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-[#ff8800] font-semibold">
                  Log In
                </Link>
              </div>
            </fieldset>

            <div className="divider">OR</div>

            <button
              type="button"
              onClick={handleGoogleSignUp}
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

export default SignUp;
