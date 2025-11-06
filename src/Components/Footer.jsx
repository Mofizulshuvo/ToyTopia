import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF7EE] text-black mt-10">
      <div className=" ml-20 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4"> <span className="text-[#ff8800] font-bold">Toy</span>Topia</h2>
          <p className="text-sm">
            Your one-stop online store for the most fun and exciting toys. 
            Quality products and happy smiles guaranteed!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/shop" className="hover:underline">Shop</Link></li>
            <li><Link to="/profile" className="hover:underline">Profile</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">123 Toy Street, Fun City, USA</p>
          <p className="text-sm">Email: support@toyland.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-orange-500 text-black text-2xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500 text-black text-2xl"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500 text-black text-2xl"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500 text-black text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="bg-[#FFB860] text-center text-sm py-4">
        &copy; {new Date().getFullYear()} ToyBee. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
