import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const RatingStars = ({ rating = 0, className }) => {
  const getRatingStars = (rating) => {
    const stars = [false, false, false, false, false];
    const ratingValue = Math.trunc(rating);
    for (let i = 0; i < ratingValue; i++) {
      stars[i] = true;
    }
    return stars;
  };
  return (
    <div className={`${className} flex gap-1`}>
      {getRatingStars(rating).map((val, index) => (
        <BsFillStarFill key={index} className={val ? "text-yellow-400" : "text-gray-300"} />
      ))}
    </div>
  );
};

export default RatingStars;
