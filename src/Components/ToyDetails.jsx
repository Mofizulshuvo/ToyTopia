import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../Contex/AuthContext";
import Review from  "../Components/Review";
const ToyDetails = () => {
  const { toyId } = useParams(); // toyId from URL
  const { ToyData } = useContext(AuthContext);
  console.log(location.pathname);
  console.log(ToyData);
  console.log(toyId);

  if (!ToyData || ToyData.length === 0) return <p className="text-center mt-10">Loading toy details...</p>;

  // Find the clicked toy by toyId (make sure to parseInt since useParams returns a string)
  const clickedToy = ToyData.find((toy) => toy.toyId === parseInt(toyId));
  const {
    toyName,
    sellerName,
    sellerEmail,
    subCategory,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
  } = clickedToy;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-4">{toyName}</h2>
      <img
        src={pictureURL}
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      <p><strong>Seller:</strong> {sellerName} ({sellerEmail})</p>
      <p><strong>Category:</strong> {subCategory}</p>
      <p><strong>Price:</strong> ${price}</p>
      <p><strong>Rating:</strong> {rating} ⭐</p>
      <p><strong>Available Quantity:</strong> {availableQuantity}</p>
      <p className="mt-4"><strong>Description:</strong> {description}</p>
      <br />
      <Review toyId={toyId}/>
    </div>
    
     
  );
};

export default ToyDetails;
