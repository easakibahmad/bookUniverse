import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { logIn, setLoading, googlePopupSignIn } = useContext(AuthContext);

  const [error, setError] = useState();

  const googleProvider = new GoogleAuthProvider();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handlePopUpSignInGoogle = () => {
    googlePopupSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUser(user.displayName, user.email);
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const saveUser = (name, email) => {
    const buyer = { name, email };
    fetch("http://localhost:4000/buyers", {
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
  return (
    <div className=" sm:p-16 py-4 shadow-md">
      <div className="hero">
        <div className="hero-content rounded flex-col">
          <div className="text-center lg:text-left">
            <p className="text-2xl font-bold">Log In Now</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body rounded ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div>
                <small>
                  <p className="text-red-700">{error}</p>
                </small>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-success text-rose-900">Login</button>
              </div>

              <p>
                <small className="text-black">
                  New to <span className="font-bold pr-2">Book Universe?</span>
                  <Link to="/signup" className="text-yellow-700 font-bold">
                    sign up now
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          style={{ width: "348px" }}
          onClick={handlePopUpSignInGoogle}
          className="mt-2 text-white btn btn-primary w-full"
        >
          <FaGoogle></FaGoogle>
          <span className="ml-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
