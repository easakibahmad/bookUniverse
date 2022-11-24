import React from "react";
import "./NotFoundRoute.css";
import { Link } from "react-router-dom";
import notfoundImg from "../../assets/notfound.png";

const NotFoundRoute = () => {
  return (
    <div className="text-center w-72 bg-black text-white h-full mx-auto page-not-found py-4 rounded-xl">
      <img className="w-1/2 mx-auto rounded mb-2" src={notfoundImg} alt="" />
      <button className="btn btn-wide">
        <Link className="text-white" to="/">
          Go to Home Page
        </Link>
      </button>
    </div>
  );
};

export default NotFoundRoute;
