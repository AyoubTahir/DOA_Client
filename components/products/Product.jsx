import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiHeart } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import PrimaryButton from "../ui/PrimaryButton";

const Product = ({ image, title, price, oldprice, reviews, badge }) => {
  return (
    <div className="border border-[#dddddd] group rounded-md">
      <div className="p-8 bg-[#f3f3f3] relative flex justify-center h-[190px]">
        <Image src={image} objectFit="contain" />
        <div className="flex justify-center items-center space-x-3 absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
          <button className="bg-primary w-10 h-10 text-white rounded-full flex justify-center items-center hover:bg-secondary">
            <FiSearch className="w-5 h-5" />
          </button>
          <button className="bg-primary w-10 h-10 text-white rounded-full flex justify-center items-center hover:bg-secondary">
            <FiHeart className="w-5 h-5" />
          </button>
        </div>
        {badge && (
          <div className="flex justify-center items-center bg-primary absolute w-10 h-10 top-0 left-0 text-white px-7 rounded-tl-md rounded-br-md capitalize">
            {badge}
          </div>
        )}
      </div>
      <div className="pt-5 pb-6 px-5 space-y-1 relative">
        <Link href="/">
          <a>
            <h4 className="text-lg font-medium">{title}</h4>
          </a>
        </Link>
        <div className="space-x-3">
          <span className="text-primary">{price}</span>
          <span className="text-sm text-gray-500 line-through">{oldprice}</span>
        </div>
        <div className="flex items-center space-x-1">
          <IoStarSharp className="text-yellow-500" />
          <IoStarSharp className="text-yellow-500" />
          <IoStarSharp className="text-yellow-500" />
          <IoStarSharp className="text-yellow-500" />
          <IoStarSharp className="text-yellow-500" />
          <div className="w-1"></div>
          <span className="text-sm text-gray-500 ml-3">({reviews})</span>
        </div>
        <div className="absolute opacity-0 bottom-3 group-hover:-translate-y-6 group-hover:opacity-100 transition duration-300 ease-in-out">
          <PrimaryButton link="/">ADD TO CART</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
