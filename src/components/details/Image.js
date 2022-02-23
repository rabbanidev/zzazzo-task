import React, { useState } from "react";

const Image = ({ image, title }) => {
  const [updateImage, setUpdateImage] = useState(image);
  const imageArray = [
    { image: image },
    { image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" },
    { image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" },
  ];

  return (
    <div className="">
      <div className="flex justify-center mb-12">
        <img src={updateImage} alt={title} className="lg:h-96 xl:h-100" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-x-3">
        {imageArray.map((item, index) => (
          <div
            key={index}
            className={`p-5 cursor-pointer ${
              updateImage === item.image && "border border-gray-300"
            }`}
            onClick={() => setUpdateImage(item.image)}
          >
            <img src={item.image} alt="" className="w-full h-32" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
