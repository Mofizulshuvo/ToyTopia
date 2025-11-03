import React from "react";
import { Link } from "react-router";
const ToysCard = ({ toy }) => {
  const { toyName, imageUrl, sellerName, price, rating, availableQuantity } =
    toy;
  return (
    <div className=" p-5  bg-white mt-4 hover: shadow-lg transform transition-transform duration-100 translate-x-2 hover:-translate-y-2 w-[450px]">
      <div className="w-[400px] h-[250px] mx-auto my-auto">
        <img
          src={imageUrl}
          className="w-full h-auto  bg-white pt-5 m-auto rounded-md"
          alt=""
        />
      </div>
      <p className="font-bold">{toyName}</p>
      <div className="flex justify-between mt-2">
        <div>
          <p className="text-gray-500">{sellerName}</p>
          <p className="text-lg font-semibold">${price}</p>
        </div>
        <div>
          <p className="text-yellow-500">Rating: {rating}⭐</p>
          <p className="text-gray-500">
            Available Quantity: {availableQuantity}
          </p>
        </div>
      </div>
      <Link to={`/Toydetails/${toy.toyId}`}>
        <button className="mt-4 w-full bg-[#FFB800] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          View More
        </button>
      </Link> 
    </div>
  );
};

export default ToysCard;
