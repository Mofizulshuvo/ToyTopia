import React from "react";
import swal from "sweetalert";

const TryNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Success!", "Your request has been submitted!", "success");
    document.getElementsByClassName("form").value = "";
  };

  return (
    <div>
      <h1 className="font-bold text-2xl text-[#f15410]">Want to buy this Product? Fill up the form and try now!</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-sm  mt-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded form"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded form"
          required
        />
        <button
          type="submit"
          className="bg-[#f15410] text-white py-2 rounded hover:bg-[#e11809]"
        >
          Try Now this Product
        </button>
      </form>
    </div>
  );
};

export default TryNow;
