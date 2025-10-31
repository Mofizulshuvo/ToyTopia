import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthContext from "../Contex/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="px-10 py-8 flex justify-between items-center text-xl bg-[#FFF7EE]">
      <GiHamburgerMenu className="sm:block md:hidden " />
      <h1 className="text-2xl text-black font-bold">TeddyBee</h1>

      <div className="hidden md:flex gap-7 justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold"
          }
        >
          Products
        </NavLink>
      </div>

      <div className="flex gap-3 items-center text-xl">
        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="user"
              className="w-10 h-10 rounded-full"
            />
            <span>{user.displayName || user.email}</span>
            <button
              onClick={logOut}
              className="bg-red-500 font-semibold text-white px-3 py-2 rounded-[10px]"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <FaUser />
            <Link
              to="/signup"
              className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
            >
              Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
