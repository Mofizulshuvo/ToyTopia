import React from "react";
import error from "../assets/images/not-found-2384304_1280.jpg";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="h-[100]">
      <Helmet>
        <title>404 Error</title>
      </Helmet>
      <img src={error} alt="" className="w-2/5 mx-auto py-40" />
    </div>
  );
};

export default ErrorPage;
