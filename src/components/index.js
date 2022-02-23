import React from "react";
import Categories from "./categories";
import Details from "./details";
import Trending from "./trending";

const Landing = () => {
  return (
    <div className="px-5 md:px-10 lg:px-5 xl:px-28">
      <Details />
      <Trending />
      <Categories />
    </div>
  );
};

export default Landing;
