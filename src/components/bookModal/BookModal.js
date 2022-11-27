import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const BookModal = ({ booksDetail, setBooksDetail }) => {
  const { name, resellPrice } = booksDetail;
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const phoneNumber = form.phoneNumber.value;
    const location = form.location.value;

    const productDataFromModal = {
      buyerName,
      email,
      productName,
      productPrice,
      phoneNumber,
      location,
    };

    fetch("http://localhost:4000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDataFromModal),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booked Successfully!! Close the modal now. Thanks!!");
        }
      });
    // setBooksDetail(null);

    console.log(productDataFromModal);
  };
  return (
    <div>
      <input type="checkbox" id="bookNowModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookNowModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Type here"
              value={displayName}
              disabled
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Type here"
              value={email}
              disabled
              className="input w-full input-bordered"
            />

            <input
              type="text"
              name="productName"
              placeholder="Type here"
              value={name}
              disabled
              className="input w-full input-bordered"
            />
            <input
              type="text"
              placeholder="Type here"
              name="productPrice"
              value={resellPrice}
              disabled
              className="input w-full input-bordered"
            />
            <input
              name="phoneNumber"
              type="number"
              placeholder="Type your phone number"
              required
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Type your location"
              required
              className="input w-full input-bordered"
            />
            <input
              className="btn btn-secondary w-full"
              type="submit"
              value="Submit"
            />
          </form>
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
      </div>
    </div>
  );
};

export default BookModal;
