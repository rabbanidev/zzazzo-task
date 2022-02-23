import React from "react";
import Rateing from "rc-rate";
import { FaRegHeart } from "react-icons/fa";
import { useGlobalContext } from "../../hooks/context";

import "rc-rate/assets/index.css";

const Product = ({ data }) => {
  const value = useGlobalContext();
  const cartHandler = (product) => {
    const currentProduct = {
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      size: "sm",
      quantity: 1,
    };
    value.addToCart(currentProduct);
  };

  return data.map((product) => (
    <div
      key={product.id}
      className="py-10 border-b border-gray-100 md:grid md:grid-cols-6 md:gap-x-5"
    >
      <div className="flex justify-center md:flex-start md:col-span-2">
        <img src={product.image} alt={product.title} className="h-72" />
      </div>
      <div className="md:col-span-4">
        <div className="md:pr-10">
          <h1 className="text-2xl font-bold mb-2 lg:mb-6">{product.title}</h1>
          <p className="text-gray-500 mb-2 lg:mb-6">{product.description}</p>
          <div className="mb-2 flex items-center gap-x-5 lg:mb-6">
            <h3 className="text-lg line-through">${product.price}</h3>
            <h3 className="text-2xl font-bold">${product.price}</h3>
          </div>
          <div className="flex mb-6 gap-x-5 items-center">
            <div className="flex">
              <Rateing value={product.rating.rate} count={5} />
              <p>
                {product.rating.rate}({product.rating.count})
              </p>
            </div>
            <button className="text-red-700 text-2xl">
              <FaRegHeart />
            </button>
          </div>
          <button
            className="px-10 py-2.5 text-red-700 font-semibold border border-red-700 outline-none shadow-sm transition hover:bg-red-700 hover:text-white"
            onClick={() => cartHandler(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Product;
