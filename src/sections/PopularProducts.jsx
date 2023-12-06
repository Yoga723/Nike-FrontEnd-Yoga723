import React from "react";
import { products } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold text-black font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-16 sm:gap-4 gap-14 ">
        {/* TODO Buat size mobile screen jadi slide sepatunya */}
        {products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-center"
          >
            <PopularProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
