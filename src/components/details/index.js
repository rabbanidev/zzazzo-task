import React, { useState } from "react";
import { useGlobalContext } from "../../hooks/context";
import { useGetData } from "../../hooks/dataApi";
import Error from "../Error";
import Loading from "../Loading";
import Image from "./Image";
import Size from "./Size";

const Details = () => {
  const [size, setSize] = useState("sm");
  const value = useGlobalContext();
  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useGetData("products", `/products/18`);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error} />;

  const { id, image, title, category, description, price } = list.data;

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
    <div className="py-24 grid grid-cols-1 gap-10 border-b border-gray-300 lg:grid-cols-2">
      <Image image={image} title={title} />
      <div className="">
        <p className="capitalize text-gray-500 mb-2 lg:mb-6">{category}</p>
        <h1 className="text-4xl font-bold mb-2 lg:mb-6">{title}</h1>
        <p className="text-gray-500 mb-2 lg:mb-6">
          {description}. Design inspiration lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
          gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
          Nullam sit amet enim.
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
      </div>
    </div>
  );
};

export default Details;
