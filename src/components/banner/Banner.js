import React from "react";
import classics from "../../assets/classics.webp";
import classics1 from "../../assets/classi.webp";
import horror from "../../assets/horror.jpg";
import fantasy from "../../assets/fantasy.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-8 py-12">
      <div className="flex justify-center">
        <span className=" font-bold md:text-2xl text-md sm:text-xl">
          Explore huge collection of second hand books!!
        </span>
      </div>
      <div className="grid grid-cols-2">
        <img
          src={classics}
          className="md:h-52 h-36 w-2/3 rounded mx-auto"
          alt=""
        />
        <img
          src={classics1}
          className="md:h-52 h-36 w-2/3 rounded mx-auto"
          alt=""
        />
      </div>
      <div>
        <Link to="/signup" className="flex justify-center mt-3">
          <button className="btn btn-accent">Sign Up Now</button>
        </Link>
      </div>
      <div className="grid grid-cols-2">
        <img
          src={horror}
          className="md:h-52 h-36 w-2/3 rounded mx-auto"
          alt=""
        />
        <img
          src={fantasy}
          className="md:h-52 h-36 w-2/3 rounded mx-auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
