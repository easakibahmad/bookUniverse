import React from "react";
import { Link } from "react-router-dom";
import "./SingleCategory.css";

const SingleCategory = ({ item }) => {
  const { category, img, _id } = item;
  return (
    <div className="border border-black rounded">
      <Link to={`/category/${_id}`} className="mb-0">
        <img src={img} className="w-full sm:h-36 lg:h-52" alt="" />
        <p className="p-2 underline category-p lg:text-2xl bg-black text-white">
          {category}
        </p>
      </Link>
    </div>
  );
};

export default SingleCategory;
