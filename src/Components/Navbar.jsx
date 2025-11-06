import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import AuthContext from "../Contex/AuthContext";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const { user, cartCount } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="px-10 py-6 flex justify-between items-center text-xl bg-[#FFF7EE] relative">
      
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-3xl text-[#ff8800]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        <h1 className="text-4xl text-black font-bold">
          <span className="text-[#ff8800] font-bold">Toy</span>Topia
        </h1>
      </div>

     
      <div className="hidden md:flex gap-7 justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-[#ff8800] font-semibold"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-[#ff8800] font-semibold"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-black font-semibold"
              : "text-[#ff8800] font-semibold"
          }
        >
          Products
        </NavLink>

        {user && (
          <>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold"
                  : "text-[#ff8800] font-semibold"
              }
            >
              Profile
            </NavLink>
            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive
                  ? "text-black font-semibold"
                  : "text-[#ff8800] font-semibold"
              }
            >
              <div className="relative inline-block">
                <FaShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full px-1.5 py-0.5">
                    {cartCount}
                  </span>
                )}
              </div>
            </NavLink>
          </>
        )}
      </div>

      
      <div className="flex gap-3 items-center text-xl">
        {user ? (
          <Dropdown />
        ) : (
          <>
            {/* <FaUser /> */}
            <Link
              to="/signup"
              className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-[#080706] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
            >
              Log In
            </Link>
          </>
        )}
      </div>

     
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#FFF7EE] flex flex-col items-center py-4 shadow-lg md:hidden z-50">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-[#ff8800] font-semibold py-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="text-[#ff8800] font-semibold py-2"
          >
            Shop
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setMenuOpen(false)}
            className="text-[#ff8800] font-semibold py-2"
          >
            Products
          </NavLink>
          {user && (
            <>
              <NavLink
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="text-[#ff8800] font-semibold py-2"
              >
                Profile
              </NavLink>
              <NavLink
                to="/Cart"
                onClick={() => setMenuOpen(false)}
                className="text-[#ff8800] font-semibold py-2"
              >
                Cart
              </NavLink>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
