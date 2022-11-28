import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useAdmin from "../../../hooks/isAdmin/IsAdmin";
import useBuyer from "../../../hooks/isBuyer/IsBuyer";
import useSeller from "../../../hooks/isSeller/IsSeller";

const Navbar = () => {
  const [category, setCategory] = useState([]);

  const { user, logOut } = useContext(AuthContext);
  const admin = useAdmin(user?.email);
  const seller = useSeller(user?.email);
  const buyer = useBuyer(user?.email);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      {category.map((item) => (
        <li key={item._id}>
          <Link to={`/category/${item._id}`}>{item.category}</Link>
        </li>
      ))}
      <li>
        <Link to="/blogs">BLogs</Link>
      </li>
      {!user?.uid && (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      {user?.uid && (
        <>
          {admin[0] && (
            <li>
              <Link to="/dashboard/allsellers">Dashboard</Link>
            </li>
          )}
          {seller[0] && (
            <li>
              <Link to="/dashboard/mybooks">Dashboard</Link>
            </li>
          )}
          {buyer[0] && (
            <li>
              <Link to="/dashboard/mybookings">Dashboard</Link>
            </li>
          )}
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div data-theme="retro" className="navbar flex justify-between">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Book Universe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>

      <label
        htmlFor="dashboardDrawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
