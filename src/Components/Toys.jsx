import React, { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const Toys = () => {
  const [toyData, setToyData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setToyData(data));
  }, []);
  console.log(toyData);
  return (
    <div className="my-10">
      <div>
        <h1 className="text-5xl font-bold text-center text-[#FFB800] mb-3">
          Most Popular Toys
        </h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 
        gap-x-2 gap-y-6 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 md:gap-y-12 
        px-4 sm:px-6 md:px-10 lg:px-20 place-items-center"
      >
        {toyData.map((toy) => (
          <ToysCard key={toy.id} toy={toy}></ToysCard>
        ))}
      </div>
    </div>
  );
};

export default Toys;
