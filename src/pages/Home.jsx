import React from "react";
import Toys from "../Components/Toys";
import Slider from "../Components/slider";

const Home = () => {
  return (
    <div>

      <Slider></Slider>
      <Toys></Toys>
    </div>
  );
};

export default Home;

// const Home = () => {
//     return (
//         <div className="min-h-screen">
//             <div className="container mx-auto py-16 text-center">
//                 <h1 className="text-4xl font-bold mb-4">Welcome to ToyLand</h1>
//                 <p className="text-xl text-gray-600">Your one-stop shop for amazing toys!</p>
//             </div>
//         </div>
//     );
// };

// export default Home;
