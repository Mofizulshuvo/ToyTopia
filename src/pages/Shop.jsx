import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [toyData, setToyData] = useState([]);
  const [priceSort, setPriceSort] = useState("");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);

  useEffect(() => {
    let filtered = [...toyData];
    if (priceSort === "low") filtered.sort((a, b) => a.price - b.price);
    else if (priceSort === "high") filtered.sort((a, b) => b.price - a.price);
    setToys(filtered);
  }, [toyData, priceSort]);

  if (!toyData.length) return <p className="text-center mt-10">Loading toys...</p>;

  return (
    <div className="mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">Shop Toys</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={priceSort}
          onChange={(e) => setPriceSort(e.target.value)}
          className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {toys.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toys.map((toy) => (
            <Link
              key={toy.toyId}
              to={`/toydetails/${toy.toyId}`}
              className="p-5 bg-white mt-4 hover:shadow-lg transform transition-transform duration-100 translate-x-2 hover:-translate-y-2 w-[400px]"
            >
              <img
                src={toy.pictureURL}
                className="w-full h-40 object-cover rounded-md mb-2"
                alt={toy.toyName}
              />
              <p className="font-medium text-gray-800 text-left">{toy.toyName}</p>
              <p className="text-orange-600 font-semibold">${toy.price}</p>
              <p>Available : {toy.availableQuantity}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">No toys found.</p>
      )}
    </div>
  );
};

export default Shop;
