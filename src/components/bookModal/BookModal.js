import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const BookModal = ({ booksDetail, setBooksDetail }) => {
  const { name, resellPrice } = booksDetail;
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const phoneNumber = form.phoneNumber.value;
    const location = form.location.value;

    const productDataFromModal = {
      name,
      email,
      productName,
      productPrice,
      phoneNumber,
      location,
    };
    toast(`${name} is booked successfully!!`);
    setBooksDetail(null);

    console.log(productDataFromModal);
  };
  return (
    <>
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
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
        </div>
      </div>
    </>
  );
};

export default BookModal;