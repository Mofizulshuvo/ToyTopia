import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Products from "../pages/Products";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../Components/ForgetPassword";


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
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      }
    ]
  }
]);