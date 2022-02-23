import React from "react";
import AllProduct from "./AllProduct";
import Categories from "./categories";
import Trending from "./trending";

const Landing = () => {
  return (
    <div className="px-5 md:px-10 lg:px-5 xl:px-28">
      <AllProduct />
      <Trending />
      <Categories />
    </div>
  );
};

export default Landing;
