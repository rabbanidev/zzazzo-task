import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../hooks/context";
import { useGetData } from "../../hooks/dataApi";
import Rateing from "rc-rate";
import Categories from "../categories";
import Error from "../Error";
import Loading from "../Loading";
import Trending from "../trending";
import Image from "./Image";
import Size from "./Size";

import "rc-rate/assets/index.css";

const Details = () => {
  const { id } = useParams();
  const [size, setSize] = useState("sm");
  const value = useGlobalContext();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("products", `/products/${id}`);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;

  const { image, title, category, description, price, rating } = list.data;

  const cartHandler = () => {
    const currentProduct = {
      productId: id,
      title,
      price,
      image,
      size,
      quantity: 1,
    };
    value.addToCart(currentProduct);
  };

  return (
    <div className="px-5 md:px-10 lg:px-5 xl:px-28">
      <div className="py-24 grid grid-cols-1 gap-10 border-b border-gray-300 lg:grid-cols-2">
        <Image image={image} title={title} />
        <div className="">
          <p className="capitalize text-gray-500 mb-2 lg:mb-6">{category}</p>
          <h1 className="text-4xl font-bold mb-2 lg:mb-6">{title}</h1>
          <p className="mb-2 lg:mb-6">
            {description}. Design inspiration lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
            gravida, orci magna rhoncus neque, id pulvinar odio lorem non
            turpis. Nullam sit amet enim.
          </p>
          <div className="mb-2 flex items-center gap-x-5 lg:mb-6">
            <h3 className="text-lg line-through">${price}</h3>
            <h3 className="text-4xl font-bold">${price}</h3>
          </div>
          <Size size={size} setSize={setSize} />
          <div className="my-6 flex flex-col gap-8 md:my-10 md:flex-row lg:mb-6">
            <button
              className="px-10 py-2.5 text-red-700 font-semibold border border-red-200 outline-none shadow-sm transition hover:bg-red-700 hover:text-white"
              onClick={cartHandler}
            >
              Add To Cart
            </button>
            <button className="px-10 py-2.5 bg-red-700  text-white font-semibold border border-red-200 outline-none shadow-lg transition hover:bg-white hover:text-red-700">
              Purcharse Now
            </button>
          </div>
          <div className="mt-10">
            <div className="my-10 flex justify-between items-center">
              <p className="font-semibold">Product Details</p>
              <div className="flex gap-x-2 items-center">
                <div className="w-3 h-3 rounded-full bg-red-700"></div>
                <div className="w-3 h-3 rounded-full bg-black"></div>
                <div className="w-3 h-3 rounded-full bg-gray-700"></div>
                <FiChevronRight size={16} />
              </div>
            </div>
            <div className="my-10 flex justify-between items-center">
              <p className="font-semibold">Product Review</p>
              <div className="flex gap-x-2 items-center">
                <Rateing value={rating.rate} count={5} />
                <p className="text-sm">
                  {rating.rate}({rating.count})
                </p>
                <FiChevronRight size={16} />
              </div>
            </div>
            <div className="my-10 flex justify-between items-center">
              <p className="font-semibold">Delevery information</p>
              <p className="text-sm">Free Shipping</p>
            </div>
          </div>
        </div>
      </div>
      <Trending />
      <Categories />
    </div>
  );
};

export default Details;
