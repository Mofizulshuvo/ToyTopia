import React, { useContext } from "react";
import AuthContext from "../Contex/AuthContext";
import { Helmet } from "react-helmet";

const Cart = () => {
  const { ToyData, cart } = useContext(AuthContext);

  const CartItems = ToyData.filter((item) => cart.includes(item.toyId));
  console.log(ToyData);
  console.log(CartItems);

  return (
    <div className="p-6">
      <Helmet>
        <title>ToyTopia | Cart</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {CartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="space-y-4">
          {CartItems.map((toy) => (
            <div
              key={toy.toyId}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{toy.toyName}</h3>
                <p>${toy.price}</p>
              </div>
              <img
                src={toy.pictureURL}
                className="w-20 h-20 object-cover"
                alt={toy.toyName}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
