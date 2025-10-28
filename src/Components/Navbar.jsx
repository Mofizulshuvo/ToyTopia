import React from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="px-10 py-8 flex justify-between items-center text-xl bg-[#FFF7EE] ">
      <GiHamburgerMenu className="sm:block md:hidden " />
      <h1 className="text-2xl text-black font-bold">TeddyBee</h1>
      <div className="hidden md:flex gap-7 justify-center items-center">
        <NavLink to="/" className="text-[#ff8800] font-semibold">
          Home
        </NavLink>
        <NavLink to="/shop" className="text-[#ff8800] font-semibold">
          Shop
        </NavLink>
        <NavLink to="/products" className="text-[#ff8800] font-semibold">
          Products
        </NavLink>
      </div>

      <div className="flex gap-3 justify-between items-center text-xl">
        <FaUser />
        <Link to="/signup" className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center">
          Sign Up
        </Link>
        <Link to="/login" className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
