/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FiShoppingBag,
  FiUser,
  FiChevronDown,
  FiSearch,
  FiHeart,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/context";

const Header = () => {
  const value = useGlobalContext();

  const signoutHandler = () => {
    value.signOut();
  };

  const noLoginUser = () => {
    return (
      <Link className="px-3 py-1 my-6 border-r border-gray-100" to="/signin">
        <FiUser size={18} />
      </Link>
    );
  };

  const loginUser = () => {
    return (
      <div>
        <span className="px-3 py-1 my-6 border-r border-gray-100">
          {value.user}
        </span>
        <button
          className="px-3 py-1 my-6 border-r border-gray-100"
          onClick={signoutHandler}
        >
          Signout
        </button>
      </div>
    );
  };

  return (
    <div className="px-5 border-b border-gray-200 flex justify-between items-center md:px-10 lg:px-5 xl:px-28">
      <div>
        <Link to="/" className="font-bold">
          FASHION CLUB
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-x-1">
          <li className="relative group">
            <Link
              to="/categories/men's clothing"
              className="px-3 py-7 flex items-center gap-x-2"
            >
              Men's
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <ul className="hidden w-52 absolute top-20 left-0 shadow group-hover:block">
              <li>
                <Link
                  to="/categories/men's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Men's
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/men's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Men's
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/men's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Men's
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link
              to="/categories/women's clothing"
              className="px-3 py-7 flex items-center gap-x-2"
            >
              Women's
              <span>
                <FiChevronDown />
              </span>
            </Link>
            <ul className="hidden w-52 absolute top-20 left-0 shadow group-hover:block">
              <li>
                <Link
                  to="/categories/women's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Women's
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/women's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Women's
                </Link>
              </li>
              <li>
                <Link
                  to="/categories/women's clothing"
                  className="px-3 py-3 hover:bg-gray-100 block"
                >
                  Women's
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/categories/electronics"
              className="px-3 py-7 flex items-center gap-x-2"
            >
              Electronics
            </Link>
          </li>
          <li>
            <Link
              to="/categories/jewelery"
              className="px-3 py-7 flex items-center gap-x-2"
            >
              Jewelery
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <Link className="px-3 py-1 my-6 border-r border-gray-100" to="/signin">
          <FiSearch size={18} />
        </Link>
        <Link className="px-3 py-1 my-6 border-r border-gray-100" to="/signin">
          <FiHeart size={18} />
        </Link>
        {value.user ? loginUser() : noLoginUser()}
        <Link className="px-3 py-1 my-6" to="/cart">
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
