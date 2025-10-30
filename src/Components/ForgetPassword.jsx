import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../Firebase/Firebase.config";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast("Please enter your email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email sent!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="w-3/6 mx-auto my-10 p-5  border border-gray-300 rounded">
      <form onSubmit={handlePasswordReset} className="">
        <input className=" border-gray-300 p-2 w-2/3 rounded mb-4"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-[#ff8800] hover:bg-orange-600 text-white p-2 rounded mx-auto" type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
