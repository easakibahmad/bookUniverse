import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const img = form.pictureUrl.value;
    const name = form.bookName.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const resellPrice = form.resellPrice.value;
    const yearsOfUsed = form.purchaseYear.value;
    const description = form.description.value;
    const condition = form.selectConditionOption.value;
    const category = form.selectCategoryOption.value;
    const phoneNumber = form.phoneNumber.value;

    const book = {
      img,
      name,
      location,
      originalPrice,
      resellPrice,
      yearsOfUsed,
      postedTime: new Date(),
      sellerName: user?.displayName,
      description,
      condition,
      phoneNumber,
      email: user?.email,
      add: "not advertise",
      status: "available",
    };

    console.log(book);
    // form.reset();

    if (category === "Classics") {
      fetch("https://book-universe-server.vercel.app/classics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Added Successfully!!");
            form.reset();
            navigate("/dashboard/mybooks");
          }
        })
        .catch((err) => console.log(err));
    }

    if (category === "Fantasy") {
      fetch("http://localhost:4000/fantasy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Added Successfully!!");
            form.reset();
            navigate("/dashboard/mybooks");
          }
        })
        .catch((err) => console.log(err));
    }

    if (category === "Horror") {
      fetch("http://localhost:4000/horror", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(book),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Added Successfully!!");
            form.reset();
            navigate("/dashboard/mybooks");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center shadow-md  lg:py-16 py-8">
      <div className="md:w-3/5 w-4/5 ">
        <p className="md:text-3xl mb-4 text-center  text-xl font-bold text-black">
          Add a book to re-sell
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="bookName"
            placeholder="book name"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="text"
            placeholder="book photo url"
            name="pictureUrl"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <input
            type="number"
            placeholder="original price"
            name="originalPrice"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="number"
            placeholder="resell price"
            name="resellPrice"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Condition</span>
            </label>
            <select
              name="selectConditionOption"
              className="select select-bordered w-full"
            >
              <option value="Good">Good</option>
              <option value="Excellent">Excellent</option>
              <option value="Fair">Fair</option>
            </select>
          </div>

          <input
            type="number"
            placeholder="phone number"
            name="phoneNumber"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="number"
            placeholder="purchase year(between 1-5)"
            name="purchaseYear"
            className="input input-bordered my-2 input-accent w-full"
            required
          />
          <input
            type="text"
            placeholder="location"
            name="location"
            className="input input-bordered my-2 input-accent w-full "
            required
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Select a category</span>
            </label>
            <select
              name="selectCategoryOption"
              className="select select-bordered w-full"
            >
              <option value="Classics">Classics</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
          <textarea
            className="textarea textarea-accent my-2 w-full"
            placeholder="brief description"
            name="description"
            required
          ></textarea>
          <div className="flex justify-center">
            <button className="bg-black text-white px-3 py-2 mb-12 font-bold mt-2 rounded-md text-sm">
              Add a book
            </button>

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
        </form>
      </div>
    </div>
  );
};

export default AddBook;
