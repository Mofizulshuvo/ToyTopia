import React from "react";
const ToysCard = ({ toy }) => {
  const { toyName, imageUrl, sellerName, price } = toy;
  return (
    <div className=" p-3  bg-white mt-4 hover: shadow-lg transform transition-transform duration-100 translate-x-2 hover:-translate-y-2 w-[350px]">
      <div className="w-[200px] h-[250px] mx-auto my-auto">
        <img
          src={imageUrl}
          className="w-full h-auto  bg-white pt-5 m-auto rounded-md"
          alt=""
        />
      </div>
      <p className="font-bold">{toyName}</p>
      <p className="text-gray-500">{sellerName}</p>
      <p className="text-lg font-semibold">${price}</p>
    </div>
  );
};

export default ToysCard;
