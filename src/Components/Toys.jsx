import React, { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import { Link } from "react-router";

const Toys = () => {
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);
  console.log(toyData);
  const PopularToys = toyData.filter((toy) =>
    [18, 17, 1, 3, 7, 5].includes(toy.toyId)
  );
  return (
    <div className="my-10">
      <div>
        <h1 className="text-5xl font-bold text-center text-[#FFB800] mb-3">
          Most Popular Toys
        </h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-x-2 gap-y-6 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 
        px-4 sm:px-6 md:px-10 lg:px-20 place-items-center"
      >
        {PopularToys.map((toy) => (
          <ToysCard key={toy.id} toy={toy}></ToysCard>
        ))}
      </div>
      <div className=" text-center">
        <Link to='/products'>
          <button className="mt-4 bg-[#FFB800] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Toys;
