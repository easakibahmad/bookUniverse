import React from "react";
import { useLoaderData } from "react-router-dom";

const ReportedItems = () => {
  const reportedItemsData = useLoaderData();
  return (
    <>
      <h1 className="text-3xl pt-12 pb-4 text-center font-bold">
        All reported items
      </h1>
      <div className="overflow-x-auto md:px-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Book name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {reportedItemsData.map((item) => (
              <tr key={item._id}>
                <td>{item.productName}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.email}</td>
                <td>{item.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ReportedItems;
