import React from "react";

const Error = ({ message = "Please reload the page." }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <p className="text-xl text-red-700">{message}</p>
    </div>
  );
};

export default Error;
