import React from "react";

const ClassicAdd = ({ item }) => {
  const {
    img,
    location,
    name,
    originalPrice,
    postedTime,
    resellPrice,
    yearsOfUsed,
    sellerName,
  } = item;

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 shadow-xl md:w-1/2 sm:w-2/3 w-full ">
        <figure>
          <img className="w-full sm:h-48 h-64" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
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
            <p className="text-xl py-1">
              <span className="text-sm">Seller:</span>{" "}
              <span className="font-bold">{sellerName}</span>
            </p>
            <p>
              <span className="text-sm">Location:</span> {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicAdd;
