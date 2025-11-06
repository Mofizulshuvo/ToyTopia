import React from "react";
import Toys from "../Components/Toys";
import Slider from "../Components/Slider";
import bike from "../assets/images/bike.webp"
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";  
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ToyTopia | Home</title>
      </Helmet>
      <Slider />
      <Toys className="mt-10" />
     <div className="flex flex-col-reverse md:flex-row items-center bg-base-100 my-10 px-4 md:px-10 lg:px-20 gap-8">
  <div className="md:w-1/2">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
      Kidz Bike Premium
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-justify font-serif">
      Bring the thrill of racing home with Bike Gift Pack! This set includes
      five die-cast Bike ready for high-speed action. Perfect for solo play
      or friendly races with friends, each Bike features unique designs and
      vibrant colors. Kids can collect, swap, and race these cars on any Hot
      Wheels track, improving hand-eye coordination and sparking imagination.
    </p>
  </div>

 
  <div className="md:w-1/2 w-full flex justify-center">
    <img
      src={bike}
      alt="Kidz Bike Premium"
      className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded"
    />
  </div>
</div>

      <div className="flex justify-around items-center gap-5">
        <img src={image1} className="w-1/2 " alt="" />
        <img src={image3} className="w-1/2 " alt="" />
        
      </div>
    </div>
  );
};

export default Home;
