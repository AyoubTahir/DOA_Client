import Link from "next/link";
import React from "react";
import PrimaryButton from "../ui/PrimaryButton";

export const Hero = () => {
  return (
    <div
      className={`w-full h-96 lg:h-[35rem] bg-[url(https://themes.programmingkit.xyz/rafcart/assets/images/banner-1.jpg)] bg-no-repeat bg-cover bg-bottom`}
    >
      <div className="container flex items-center h-full">
        <div className="md:w-5/6 lg:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-roboto mb-5">
            Best Collection For Home Decoration{" "}
          </h1>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
            rhoncus pellentesque id integer neque, vel accumsan dolor diam.
          </p>
          <PrimaryButton link="/">Shop Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};
