import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ product }) => {
  const {name, price, rating} = product
  return (
    <div className="flex flex-col w-fit object-contain rounded-xl hover:cursor-pointer hover:shadow-lg hover:shadow-white hover:bg-slate-400 px-3 py-5 justify-center item-center ">
      <img
        src={product.imgURL}
        alt="Popular Shoe"
        width={280}
        height={280}
        className="object-contain"
      />
      <div className="flex justify-start mt-4 w-fit">
        <img
          src={star}
          alt="star"
          width={15}
          height={15}
        />
        <p className="text-sm text-slate-gray ml-5">{rating}</p>
      </div>
      <p className="font-semibold mt-2 w-fit text-2xl leading-normal">{name}</p>
      <p className="font-semibold text-coral-red text-2xl leading-normal font-montserrat ">{price}</p>
    </div>
  );
};

export default PopularProductCard;
