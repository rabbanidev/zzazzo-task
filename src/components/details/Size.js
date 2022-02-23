import React from "react";

const data = [
  {
    value: "sm",
  },
  {
    value: "m",
  },
  {
    value: "l",
  },
  {
    value: "xl",
  },
];

const Size = ({ size, setSize }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-bold uppercase mb-2">Size : {size}</h3>
      <div className="flex gap-x-3">
        {data.map((item) => (
          <span
            key={item.value}
            className={`py-2 px-5 text-sm text-red-700 font-semibold shadow-sm uppercase cursor-pointer sm:px-7 ${
              size === item.value
                ? "border-b-2 border-red-700"
                : "border border-red-200"
            }`}
            onClick={() => setSize(item.value)}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Size;
