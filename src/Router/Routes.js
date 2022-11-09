import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import TopServices from "../Pages/TopServices/TopServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/topservice",
        element: <TopServices></TopServices>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
