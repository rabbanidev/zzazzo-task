/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";

const data = [
  {
    title: "Men's",
    to: "/categories/men's clothing",
  },
  {
    title: "Women's",
    to: "women's clothing",
  },
  {
    title: "Jewelery",
    to: "/categories/jewelery",
  },
  {
    title: "Electronics",
    to: "/categories/electronics",
  },
];

const Header = () => {
  const value = useGlobalContext();

  const signoutHandler = () => {
    value.signOut();
  };

  const noLoginUser = () => {
    return (
      <Link className="px-3 py-2 border-r border-gray-100" to="/signin">
        <FiUser size={18} />
      </Link>
    );
  };

  const loginUser = () => {
    return (
      <div>
        <span className="px-3 py-2 border-r border-gray-100">{value.user}</span>
        <button
          className="px-3 py-2 border-r border-gray-100"
          onClick={signoutHandler}
        >
          Signout
        </button>
      </div>
    );
  };

  return (
    <div className="px-5 py-6 shadow-sm flex justify-between items-center md:px-10 lg:px-5 xl:px-28">
      <div>
        <Link to="/" className="font-bold">
          LOGO
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-x-1">
          {data.map((item, index) => (
            <li key={index} className="px-3 py-2">
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        {value.user ? loginUser() : noLoginUser()}
        <Link className="px-3 py-2" to="/cart">
          <span className="flex items-center gap-x-1">
            <FiShoppingBag size={18} />
            <span className="text-red-700">{value.cartItems.length}</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
