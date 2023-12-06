import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 container">
      <div className="flex-1">
        <img
          src={offer}
          alt="ofer"
          width={773}
          height={687}
          className="object-contain w-full "
        />
      </div>
      <div className="flex flex-col max-w-lg">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="max-w-lg my-4 info-text">
          Embark on a shopping journey that redifines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparraled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassingthe lofties expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-row flex-1 gap-4">
          <Button
            label={"Shop Now"}
            iconURL={arrowRight}
          />
          <Button
            label={"Learn More"}
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
