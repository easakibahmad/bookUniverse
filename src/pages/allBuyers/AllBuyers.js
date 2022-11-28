import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AllBuyers = () => {
  const [allBuyers, setAllBuyers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/buyers")
      .then((res) => res.json())
      .then((data) => setAllBuyers(data));
  }, []);

  const handleDelete = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`http://localhost:4000/buyers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Buyer deleted successfully!!");
            const remaining = allBuyers.filter((buyr) => buyr._id !== id);
            setAllBuyers(remaining);
          }
        });
    }
  };
  return (
    <>
      <h1 className="text-3xl pt-12 pb-4 text-center font-bold">All Buyers</h1>
      <div className="overflow-x-auto md:px-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allBuyers.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-sm bg-pink"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 2000,
            }}
          />
        </table>
      </div>
    </>
  );
};

export default AllBuyers;
