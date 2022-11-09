import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
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
        loader: () => {
          fetch("http://localhost:5000/topservices");
        },
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
