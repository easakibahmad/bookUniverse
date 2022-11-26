import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Blogs from "../pages/blogs/Blogs";
import Classics from "../pages/classics/Classics";
import Fantasy from "../pages/fantasy/Fantasy";
import Home from "../pages/home/Home";
import Horror from "../pages/horror/Horror";
import Login from "../pages/login/Login";
import NotFoundRoute from "../pages/notFound/NotFoundRoute";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/63801372f12837a2b8673400",
        element: (
          <PrivateRoute>
            <Classics></Classics>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/classics"),
      },
      {
        path: "/category/63801372f12837a2b8673401",
        element: (
          <PrivateRoute>
            <Horror></Horror>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/horror"),
      },
      {
        path: "/category/63801372f12837a2b8673402",
        element: (
          <PrivateRoute>
            <Fantasy></Fantasy>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/fantasy"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  { path: "*", element: <NotFoundRoute></NotFoundRoute> },
]);
