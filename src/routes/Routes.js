import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Blogs from "../pages/blogs/Blogs";
import Classics from "../pages/classics/Classics";
import Fantasy from "../pages/fantasy/Fantasy";
import Home from "../pages/home/Home";
import Horror from "../pages/horror/Horror";
import Login from "../pages/login/Login";
import NotFoundRoute from "../pages/notFound/NotFoundRoute";

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
        path: "/category/classics",
        element: <Classics></Classics>,
      },
      {
        path: "/category/horror",
        element: <Horror></Horror>,
      },
      {
        path: "/category/fantasy",
        element: <Fantasy></Fantasy>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
  { path: "*", element: <NotFoundRoute></NotFoundRoute> },
]);
