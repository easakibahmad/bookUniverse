import React from "react";
import { useLoaderData } from "react-router-dom";
import ClassicBook from "../../components/classicsBook/ClassicBook";

const Classics = () => {
  const dataClassics = useLoaderData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-12 lg:p-16 lg:grid-cols-3">
      {dataClassics.map((item) => (
        <ClassicBook key={item._id} item={item}>
          item
        </ClassicBook>
      ))}
    </div>
  );
};

export default Classics;
