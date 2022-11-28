import React, { useEffect, useState } from "react";
import SingleCategory from "../singleCategory/SingleCategory";

const CategorySection = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://book-universe-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="p-12">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">Categories</p>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.map((item) => (
          <SingleCategory item={item} key={item._id}></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
