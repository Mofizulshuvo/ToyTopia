import React, { useContext, useState } from "react";
import AuthContext from "../Contex/AuthContext";

const Dropdown = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <img
        src={user?.photoURL || "https://via.placeholder.com/40"}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
      />

    
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-100">
            <p className="text-sm font-semibold text-gray-800">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>

          <div className="flex flex-col">
            <button
              onClick={logOut}
              className="px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
