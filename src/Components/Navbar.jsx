// import React, { useContext } from "react";
// import { FaUser } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link, NavLink } from "react-router-dom"; // fixed: should be 'react-router-dom'
// import { AuthContext } from "../context/AuthContext";

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <div className="px-10 py-8 flex justify-between items-center text-xl bg-[#FFF7EE]">
//       {/* Left: Hamburger for mobile */}
//       <GiHamburgerMenu className="sm:block md:hidden cursor-pointer" />

//       {/* Center: Brand Name */}
//       <h1 className="text-2xl text-black font-bold">TeddyBee</h1>

//       {/* Middle: Navigation Links (hidden on mobile) */}
//       <div className="hidden md:flex gap-7 justify-center items-center">
//         <NavLink to="/" className="text-[#ff8800] font-semibold">
//           Home
//         </NavLink>
//         <NavLink to="/shop" className="text-[#ff8800] font-semibold">
//           Shop
//         </NavLink>
//         <NavLink to="/products" className="text-[#ff8800] font-semibold">
//           Products
//         </NavLink>
//       </div>

//       {/* Right: Auth Buttons */}
//       <div className="flex gap-3 justify-between items-center text-xl">
//         {user ? (
//           <>
//             {/* Profile picture */}
//             <img
//               src={user.photoURL || "/default-avatar.png"}
//               alt="Profile"
//               title={user.displayName || "User"}
//               className="w-10 h-10 rounded-full border-2 border-[#ff8800]"
//             />

//             {/* Logout button */}
//             <button
//               onClick={logout}
//               className="bg-[#ff8800] text-white px-3 py-2 w-[100px] rounded-[10px] font-semibold"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <FaUser />
//             <Link
//               to="/signup"
//               className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
//             >
//               Sign Up
//             </Link>
//             <Link
//               to="/login"
//               className="bg-[#ff8800] font-semibold text-white px-3 py-2 w-[100px] rounded-[10px] text-center"
//             >
//               Log In
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


















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
        <NavLink to="/" className={({isActive})=> (isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold")}>
          Home
        </NavLink>
        <NavLink to="/shop" className={({isActive})=> (isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold")}>
          Shop
        </NavLink>
        <NavLink to="/products" className={({isActive})=> (isActive ? "text-black font-semibold" : "text-[#ff8800] font-semibold")}>
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
