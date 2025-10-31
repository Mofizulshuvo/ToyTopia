import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Products from "../pages/Products";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../Components/ForgetPassword";
import PrivateRoutes from "../Components/PrivateRoutes";
import Profile from "../pages/Profile";
// import ToyDetails from "../Components/ToyDetails";


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
      },
      {
        path: "/profile",
        element: <PrivateRoutes>
          <Profile />
          </PrivateRoutes>
      },
      {
        path: "/Toydetails/:toyId",
        element: <PrivateRoutes>
          {/* <ToyDetails /> */}
          </PrivateRoutes>
      }
    ]
  }
]);