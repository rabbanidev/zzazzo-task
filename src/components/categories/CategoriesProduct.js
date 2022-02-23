import React from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/dataApi";
import Error from "../Error";
import Loading from "../Loading";
import Product from "../Product";

const CategoriesProduct = () => {
  const { category } = useParams();
  console.log("category", category);
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("products", `/products/category/${category}`);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;

  return (
    <div className="px-5 py-24 border-b border-gray-300 md:px-10 lg:px-5 xl:px-28">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="capitalize text-xl font-bold mb-2 md:text-4xl lg:mb-6">
          {category}
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

export default CategoriesProduct;
