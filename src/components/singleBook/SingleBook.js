import React from "react";
import "./SingleBook.css";

const SingleBook = ({ item, setBooksDetail }) => {
  const {
    img,
    location,
    name,
    originalPrice,
    postedTime,
    resellPrice,
    yearsOfUsed,
  } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full sm:h-48 h-64" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <span className="text-sm">posted time:</span>{" "}
          {postedTime.slice(0, 10)}
        </p>
        <div className="flex gap-3 items-center">
          <div className=" text-red-500 font-bold text-2xl">
            <strike>{originalPrice}$</strike>
          </div>
          <div className="font-bold text-red-500">{resellPrice}$</div>
        </div>
        <div>
          <p>
            <span className="text-sm">Used: </span>
            {yearsOfUsed}y
          </p>
          <p>
            <span className="text-sm">Location:</span> {location}
          </p>
        </div>
      </div>
      <label
        htmlFor="bookNowModal"
        className="btn border-none w-full rounded mx-auto bg-pink-500 text-white font-bold p-2"
        onClick={() => setBooksDetail(item)}
      >
        <div className="flex justify-center">Book Now</div>
      </label>
    </div>
  );
};

export default SingleBook;
