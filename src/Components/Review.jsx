import React, { useState, useContext } from "react";
import AuthContext from "../Contex/AuthContext";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();

    const newReview = {
      date: Date.now(),
      name: user?.displayName ,
      comment,
    };

    setReviews([...reviews, newReview]);
    setComment("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">
        Customer Reviews
      </h3>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 border rounded-lg bg-gray-50 shadow-sm"
            >
              <p className="font-semibold text-orange-600">{review.name}</p>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      )}

    
      {user ? (
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-3 text-gray-800">
            Add Your Review Here
          </h4>
          <form onSubmit={handleAddReview} className="space-y-4">
            <input
              type="text"
              value={user.displayName}
              className="w-full  py-2 rounded-lg bg-gray-100 text-gray-700 border px-4"
            />
            <textarea
              placeholder="Write your comment..."
              required
              onChange={(e) => setComment(e.target.value)}
              className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none h-24"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
            >
              Submit Review
            </button>
          </form>
        </div>
      ) : (
        <p className="mt-6 text-gray-500 italic">
          Please log in to add a review.
        </p>
      )}
    </div>
  );
};

export default ReviewSection;
