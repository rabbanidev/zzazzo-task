import React from "react";
import { useGetData } from "../hooks/dataApi";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const AllProduct = () => {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("products", `/products`);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;

  return (
    <div className="py-24 border-b border-gray-300">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-2 md:text-4xl lg:mb-6">
          All Products
        </h1>
        <div>
          <button className="px-3 py-2.5 text-red-700 font-semibold border border-red-700 outline-none shadow-sm transition hover:bg-red-700 hover:text-white">
            View All
          </button>
        </div>
      </div>
      <Product data={list.data} />
    </div>
  );
};

export default AllProduct;
