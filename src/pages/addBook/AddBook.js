import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const picture = form.pictureUrl.value;
    const price = form.price.value;
    const placeName = form.placename.value;
    const tripDetails = form.tripDetails.value;
    const rating = form.rating.value;

    const service = {
      picture,
      price,
      placeName,
      tripDetails,
      rating,
      date: new Date(),
    };

    // console.log(service);
    // form.reset();

    fetch("https://the-adventurer-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added Successfully!!");
          form.reset();
        }
      })
      .catch((err) => console.log(err));
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
            name="placename"
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
              name="selectOption"
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
            name="purchase year"
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
              name="selectOption"
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
              Add book
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
