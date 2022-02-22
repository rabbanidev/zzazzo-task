import React from "react";
import { useGetData } from "../../hooks/dataApi";
import Size from "./Size";

const Details = () => {
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("products", `/products/18`);

  if (isLoading)
    return <h1 className="text-4xl font-bold mb-2 lg:mb-6">Loading</h1>;
  if (isError)
    return <h1 className="text-4xl font-bold mb-2 lg:mb-6">{error}</h1>;

  const { image, title, category, description, price } = list.data;

  return (
    <div className="grid grid-cols-1 gap-10 my-12 lg:grid-cols-2">
      <div className="">
        <div className="flex justify-center">
          <img src={image} alt={title} className="lg:h-96 xl:h-100" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-x-3">
          <img src="/images/image.jpg" alt="" className="w-full h-36" />
          <img src="/images/image.jpg" alt="" className="w-full h-36" />
          <img src="/images/image.jpg" alt="" className="w-full h-36" />
        </div>
      </div>
      <div className="">
        <h6 className="text-lg font-semibold uppercase lg:mb-6">{category}</h6>
        <h1 className="text-4xl font-bold mb-2 lg:mb-6">{title}</h1>
        <p className="text-gray-500 mb-2 lg:mb-6">
          {description}. Design inspiration lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
          gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
          Nullam sit amet enim.
        </p>
        <h3 className="text-3xl font-bold text-gray-700 mb-2 lg:mb-6">
          ${price}
        </h3>
        <Size />
        <div className="my-6 flex flex-col gap-3 md:my-10 md:flex-row lg:mb-6">
          <button className="px-10 py-2.5 text-red-700 font-semibold border border-red-700 outline-none shadow-lg transition hover:bg-red-700 hover:text-white">
            Add To Cart
          </button>
          <button className="px-10 py-2.5 bg-red-700  text-white font-semibold border border-red-700 outline-none shadow-lg transition hover:bg-white hover:text-red-700">
            Purcharse Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
