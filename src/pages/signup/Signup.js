import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const [error, setError] = useState();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const selectOption = form.selectOption.value;
    // console.log(selectOption);
    const profile = {
      displayName: name,
    };
    console.log(profile);
    const handleProfileInfo = () => {
      updateUserProfile(profile)
        .then(() => {
          if (selectOption === "Buyer") {
            saveBuyer(name, email);
          } else {
            let verification = "not verified";
            saveSeller(name, email, verification);
          }
          console.log("updated");
        })
        .catch((error) => {
          setError(error.message);
        });
    };

    if (password.length < 6) {
      setError("password should be at least 6 characters");
      return;
    }

    createUser(email, password)
      .then((result) => {
        setLoading(false);
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        form.reset();
        handleProfileInfo();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const saveBuyer = (name, email) => {
    const buyer = { name, email };
    fetch("https://book-universe-server.vercel.app/buyers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(buyer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const saveSeller = (name, email, verification) => {
    const seller = { name, email, verification };
    fetch("https://book-universe-server.vercel.app/sellers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(seller),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className=" sm:p-16 py-4 shadow-md">
      <div className="hero">
        <div className="hero-content rounded flex-col">
          <div className="text-center lg:text-left">
            <p className="text-2xl  font-bold">Sign Up Now</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body rounded ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Type of user</span>
                </label>
                <select
                  name="selectOption"
                  className="select select-bordered w-full"
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <p className="text-red-700">
                <small>{error}</small>
              </p>

              <div className="form-control mt-6">
                <button className="btn btn-success text-rose-900">
                  Signup
                </button>
              </div>

              <p>
                <small className="text-black">
                  <span className="pr-2 font-bold">
                    Already have an account?
                  </span>
                  <Link to="/login" className="text-yellow-700 font-bold">
                    log in now
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
