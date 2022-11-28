import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/shared/nav/Navbar";
import { AuthContext } from "../context/AuthProvider";
import useSeller from "../hooks/isSeller/IsSeller";
import useAdmin from "../hooks/isAdmin/IsAdmin";
import useBuyer from "../hooks/isBuyer/IsBuyer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const seller = useSeller(user?.email);
  const admin = useAdmin(user?.email);
  const buyer = useBuyer(user?.email);
  console.log(admin);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-black text-white">
            {admin[0] && (
              <>
                <li>
                  <Link className="underline" to="/dashboard/allsellers">
                    All sellers
                  </Link>
                </li>
                <li>
                  <Link className="underline" to="/dashboard/allbuyers">
                    All buyers
                  </Link>
                </li>
                <li>
                  <Link className="underline" to="/dashboard/reportedItems">
                    Reported items
                  </Link>
                </li>
              </>
            )}
            {seller[0] && (
              <>
                <li>
                  <Link to="/dashboard/mybooks" className="underline">
                    My books
                  </Link>
                </li>
                <li>
                  <Link className="underline" to="">
                    Add a book
                  </Link>
                </li>
              </>
            )}
            {buyer[0] && (
              <li className="underline">
                <Link to="/dashboard/mybookings">My bookings</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
