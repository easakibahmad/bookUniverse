import React from "react";
import mary from "../../assets/mary.jpg";
import bay from "../../assets/bay.jpg";
import pother from "../../assets/pother.jpeg";
import river from "../../assets/river.jpeg";
import those from "../../assets/those.jpeg";
import unruly from "../../assets/unruly.jpeg";

const BestSelling = () => {
  return (
    <div className="p-12">
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Best re-selling books
      </p>

      <div className="py-4 gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <img className="w-full h-64 rounded" src={mary} alt="" />
        </div>
        <div>
          <img className="w-full h-64 rounded" src={bay} alt="" />
        </div>
        <div>
          <img className="w-full h-64 rounded" src={pother} alt="" />
        </div>
        <div>
          <img className="w-full h-64 rounded" src={river} alt="" />
        </div>
        <div>
          <img className="w-full h-64 rounded" src={those} alt="" />
        </div>
        <div>
          <img className="w-full h-64 rounded" src={unruly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
