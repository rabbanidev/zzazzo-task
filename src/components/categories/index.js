import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    title: "men's clothing",
    image: "/images/image.jpg",
  },
  {
    title: "women's clothing",
    image: "/images/image.jpg",
  },
  {
    title: "jewelery",
    image: "/images/image.jpg",
  },
  {
    title: "electronics",
    image: "/images/image.jpg",
  },
  {
    title: "men's clothing",
    image: "/images/image.jpg",
  },
  {
    title: "women's clothing",
    image: "/images/image.jpg",
  },
  {
    title: "jewelery",
    image: "/images/image.jpg",
  },
  {
    title: "electronics",
    image: "/images/image.jpg",
  },
];

const Categories = () => {
  return (
    <div className="py-24">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-2 md:text-4xl lg:mb-6">
          Shop By Categories
        </h1>
        <div>
          <button className="px-3 py-2.5 text-red-700 font-semibold border border-red-700 outline-none shadow-sm transition hover:bg-red-700 hover:text-white">
            View All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((category, index) => (
          <Link
            key={index}
            className="category bg-red-500 h-64 relative group cursor-pointer"
            to={`/categories/${category.title}`}
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full"
            />
            <h2 className="capitalize text-xl font-normal text-white absolute top-28 left-10 transition opacity-0 group-hover:opacity-100">
              {category.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
