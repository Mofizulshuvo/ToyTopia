import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../Contex/AuthContext";
import Review from "../Components/Review";
import Loader from "./Loader";
import TryNow from "../Components/TryNow";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
const ToyDetails = () => {
  const { toyId } = useParams();
  const { ToyData, cart, setCart,cartCount,setCartCount } = useContext(AuthContext);
  console.log(location.pathname);
  console.log(ToyData);
  console.log(toyId);

  // const [cart, setCart] = useState([]);

  if (!ToyData) return <Loader></Loader>;

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
    <div className=" mx-auto p-6 bg-white shadow rounded-lg my-10">
      <Helmet>
        <title>ToyTopia | Toy Details</title>
      </Helmet>
      <h2 className="text-3xl font-bold mb-4">{toyName}</h2>
      <img
        src={pictureURL}
        className="w-2/3 mx-auto h-[500px] object-center rounded-md mb-6"
      />
      <div className="flex justify-between items-start">
        <div>
          <p>
            <strong>Seller:</strong> {sellerName} ({sellerEmail})
          </p>
          <p>
            <strong>Category:</strong> {subCategory}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Rating:</strong> {rating} ⭐
          </p>
          <p>
            <strong>Available Quantity:</strong> {availableQuantity}
          </p>
          <p className="mt-4">
            <strong>Description:</strong> {description}
          </p>
          <br />
          <TryNow/>
          <Review toyId={toyId} />
        </div>
        <div>
          <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 "
          onClick={() => {setCart((cart) => [...cart, clickedToy.toyId])
            toast.success(`${toyName} is added to the cart successfully!`)
            setCartCount(cartCount+1);
            
          }
          }
        >
          Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
