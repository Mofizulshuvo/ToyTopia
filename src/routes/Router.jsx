import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Products from "../pages/Products";
import Shop from "../pages/Shop";
import Login from "../pages/login";
import SignUp from "../pages/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
    ]
  }
]);