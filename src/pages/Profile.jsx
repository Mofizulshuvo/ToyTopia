import React, { useContext, useState } from "react";
import AuthContext from "../Contex/AuthContext";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, setUser, logOut } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user.displayName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);

  if(!user)  return <Loader/>

  const handleSave = () => {
    setUser({ ...user, displayName: name, photoURL: photoURL });
    setEditMode(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoURL(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>ToyTopia | Profile</title>
      </Helmet>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">

        <div className="relative">
          <img
            src={photoURL}
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
          {editMode && (
            <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-1 rounded-full cursor-pointer">
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
              ✎
            </label>
          )}
        </div>

        <div className="flex-1 w-full">
          {editMode ? (
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 rounded w-full"
                placeholder="Enter your name"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={logOut}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => setEditMode(true)}
                  className="bg-[#ff8800] text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Edit Profile
                </button>
                <button
                  onClick={logOut}
                  className="bg-[#ff8800] text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
