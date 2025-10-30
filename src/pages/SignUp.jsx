import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [user, setUser] = useState(null);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);

        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            toast(error.message);
          });

        sendEmailVerification(user)
          .then(() => {
            toast("Verification email sent! Please check your inbox.");
            signOut(auth); // Prevent access until verified
          })
          .catch((error) => toast(error.message));
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        toast("Signed in with Google successfully!");
        setUser(auth.currentUser);
      })
      .catch((error) => {
        toast(error.message);
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

              <label className="label">Image URL</label>
              <input
                type="text"
                name="image"
                className="input w-full"
                placeholder="Your image URL"
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
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
