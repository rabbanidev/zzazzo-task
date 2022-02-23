import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../hooks/context";
import CartList from "./CartList";

const Cart = () => {
  const value = useGlobalContext();
  return (
    <div className="px-5 md:px-10 lg:px-5 xl:px-28">
      {value.cartItems.length > 0 ? (
        <CartList value={value} />
      ) : (
        <div className="flex flex-col justify-center items-center h-96">
          <h2 className="pb-5 font-medium text-4xl">Your Cart is Empty</h2>
          <Link
            to="/"
            className="px-3 py-2 font-semibold outline-none shadow-sm rounded border border-red-700 bg-red-700 text-white transition hover:bg-white hover:text-red-700"
          >
            <span className="pr-3">Go Back Shopping</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
