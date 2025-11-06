import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet";

const Products = () => {
  const [toys, setToys] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!toys.length) return <Loader />;

  const filteredToys =
    activeCategory === "All"
      ? toys
      : toys.filter((toy) => toy.subCategory === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <Helmet>
        <title>ToyTopia | Products</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Explore Our Toys
      </h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full font-semibold ${
              activeCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-orange-400 hover:text-white transition"
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredToys.map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
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

export default Products;
