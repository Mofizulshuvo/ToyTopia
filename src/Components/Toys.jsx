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
    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center">
      {toyData.map((toy) => (
        <ToysCard key={toy.id} toy={toy}></ToysCard>
      ))}
    </div>
  );
};

export default Toys;
