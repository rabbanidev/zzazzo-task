import React from "react";

const CartList = ({ value }) => {
  const { cartItems, quantityIncreaseOrDecrease, deleteCartItem } = value;

  const subTotal = (price, quantity) => {
    const subTotal = price * quantity;
    return subTotal.toFixed(2);
  };

  return (
    <div className="pb-16 mt-5">
      <div className="mb-6">
        <h1 className="pb-2 font-medium text-4xl uppercase">CART</h1>
      </div>
      <div className="text-sm font-medium">
        <div className="py-3 px-5 md:grid grid-cols-4 list-header shadow-sm">
          <div className="flex justify-start">
            <span className="font-semibold">PRODUCT NAME</span>
          </div>
          <div className="flex justify-start">
            <span className="font-semibold">PRICE</span>
          </div>
          <div className="flex justify-start">
            <span className="font-semibold">QUANTITY</span>
          </div>
          <div className="flex justify-start ">
            <span className="font-semibold">SUB TOTAL</span>
          </div>
        </div>
        {cartItems.map((cartItem, index) => (
          <div
            key={index}
            className="p-3 border-b border-gray-200 grid grid-cols-1 gap-1 md:grid-cols-4 "
          >
            <div className="py-5">
              <div className="flex gap-x-8">
                <img
                  className="w-28 h-16"
                  src={cartItem.image}
                  alt={cartItem.name}
                />
                <div>
                  <span className="mb-3 break-words text-lg block hover:underline">
                    {cartItem.name}
                  </span>
                  <span
                    className="break-words text-md cursor-pointer opacity-30 transition delay-100 hover:opacity-100"
                    onClick={() => deleteCartItem(cartItem.productId)}
                  >
                    REMOVE
                  </span>
                </div>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <span className="inline-block md:hidden mb-3 break-words text-sm">
                PRICE
              </span>
              <div>
                <span className="break-words text-md text-red-500 line-through block">
                  ${cartItem.price}
                </span>
                <span className="mb-0 break-words text-md block">
                  ${cartItem.price}
                </span>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <span className="inline-block md:hidden mb-3 break-words text-sm">
                QUANTITY
              </span>
              <div className="flex justify-between items-center border w-20 h-10 rounded">
                <button
                  className="px-2 border-r"
                  disabled={cartItem.quantity <= 1}
                  onClick={() =>
                    quantityIncreaseOrDecrease(
                      cartItem.productId,
                      cartItem.quantity - 1
                    )
                  }
                >
                  &#8722;
                </button>
                <span className="">{cartItem.quantity}</span>
                <button
                  className="px-2 border-l"
                  onClick={() =>
                    quantityIncreaseOrDecrease(
                      cartItem.productId,
                      cartItem.quantity + 1
                    )
                  }
                >
                  &#43;
                </button>
              </div>
            </div>
            <div className="py-5 flex justify-between">
              <span className="inline-block md:hidden mb-3 break-words text-sm">
                SUB TOTAL
              </span>
              <div className="mt-2">
                <span className="break-words text-md block md:mt-0">
                  ${subTotal(cartItem.price, cartItem.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
