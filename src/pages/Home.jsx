import React from "react";
import Toys from "../Components/Toys";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>

      <Slider />
      <Toys className="mt-10" />
      
    </div>
  );
};

export default Home;

