import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AllSellers = () => {
  const [allSellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetch("https://book-universe-server.vercel.app/sellers")
      .then((res) => res.json())
      .then((data) => setAllSellers(data));
  }, []);

  const handleDelete = (id) => {
    const proceedToDelete = window.confirm("Are you sure to delete?");
    if (proceedToDelete) {
      fetch(`https://book-universe-server.vercel.app/sellers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Seller deleted successfully!!");
            const remaining = allSellers.filter((sellr) => sellr._id !== id);
            setAllSellers(remaining);
          }
        });
    }
  };

  return (
    <>
      <h1 className="text-3xl pt-12 pb-4 text-center font-bold">All sellers</h1>
      <div className="overflow-x-auto md:px-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allSellers.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>Not Verified</td>
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
        </table>
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
      </div>
    </>
  );
};

export default AllSellers;
