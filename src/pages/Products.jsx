import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // Filter only featured toys
        const featured = data.filter((toy) => toy.featured);
        setToys(featured);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!toys.length) {
    return <p className="text-center mt-10">Loading featured toys...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Top Picks for You
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {toy.toyName}
            </h2>
            <p className="text-orange-500 font-bold">${toy.price}</p>
            <p className="text-gray-500 text-sm">{toy.subCategory}</p>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {toy.description}
            </p>
            <Link
              to={`/Toydetails/${toy.toyId}`}
              className="mt-3 inline-block w-full text-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedToys;
