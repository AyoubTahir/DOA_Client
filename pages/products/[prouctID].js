import Image from "next/image";
import Link from "next/link";
import { IoStarSharp } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Breadcrumb from "../../components/ui/Breadcrumb";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { category1Image } from "../../public/assets/images";

const Product = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 mb-10">
        <div className="lg:w-1/2">
          <div>
            <Image src={category1Image} />
          </div>
          <div className="flex space-x-3 mt-1">
            <div>
              <Image src={category1Image} />
            </div>
            <div>
              <Image src={category1Image} />
            </div>
            <div>
              <Image src={category1Image} />
            </div>
            <div>
              <Image src={category1Image} />
            </div>
            <div>
              <Image src={category1Image} />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-6">
          <h1 className="text-2xl sm:text-3xl mb-6 uppercase font-medium">
            MEN'S ADIDAS COURTSMASH
          </h1>
          <div className="flex space-x-1 items-center">
            <IoStarSharp className="text-yellow-500" />
            <IoStarSharp className="text-yellow-500" />
            <IoStarSharp className="text-yellow-500" />
            <IoStarSharp className="text-yellow-500" />
            <IoStarSharp className="text-yellow-500" />
            <span className="!ml-4  mt-[1px] text-sm text-gray-400">
              50 Reviews
            </span>
          </div>
          <div className="mt-4">
            <p className="font-medium text-green-500">
              <span className="mr-2 text-black">Availability:</span>
              In Stock
            </p>
            <p className="mt-2">
              <span className="mr-2 text-black font-medium">Brand:</span>
              Nike
            </p>
            <p className="mt-2">
              <span className="mr-2 text-black  font-medium">Category:</span>
              Clothing
            </p>
          </div>
          <div className="mt-4 flex items-center">
            <span className="text-gray-500 line-through mr-2 font-medium">
              $5000.00
            </span>
            <span className="text-primary text-xl font-semibold mr-4">
              $4500.00
            </span>
            <span className="bg-primary py-[2px] px-2 text-white after:w-4 after:h-4 after:bg-primary relative after:content-[''] after:absolute after:right-[45px] after:top-[5.9px] after:rotate-45 after:-z-10">
              -30%
            </span>
          </div>
          <div className="mt-5">
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              exercitationem quaerat excepturi labore blanditiis
            </p>
          </div>
          <div className="mt-5 space-x-3 text-sm">
            <h4 className="text-lg font-medium mb-3">Size</h4>
            <div className="inline-block !ml-0">
              <input type="radio" name="size" hidden id="size1" class="peer" />
              <label
                htmlFor="size1"
                className="cursor-pointer peer-checked:bg-primary border py-1 px-2 peer-checked:text-white rounded"
              >
                XS
              </label>
            </div>
            <div className="inline-block">
              <input type="radio" name="size" hidden id="size2" class="peer" />
              <label
                htmlFor="size2"
                className="cursor-pointer peer-checked:bg-primary border py-1 px-2 peer-checked:text-white rounded"
              >
                S
              </label>
            </div>
            <div className="inline-block">
              <input type="radio" name="size" hidden id="size3" class="peer" />
              <label
                htmlFor="size3"
                className="cursor-pointer peer-checked:bg-primary border py-1 px-2 peer-checked:text-white rounded"
              >
                M
              </label>
            </div>
            <div className="inline-block">
              <input type="radio" name="size" hidden id="size4" class="peer" />
              <label
                htmlFor="size4"
                className="cursor-pointer peer-checked:bg-primary border py-1 px-2 peer-checked:text-white rounded"
              >
                L
              </label>
            </div>
            <div className="inline-block">
              <input type="radio" name="size" hidden id="size5" class="peer" />
              <label
                htmlFor="size5"
                className="cursor-pointer peer-checked:bg-primary border py-1 px-2 peer-checked:text-white rounded"
              >
                XL
              </label>
            </div>
          </div>
          <div className="mt-5 space-x-3 text-sm">
            <h4 className="text-lg font-medium mb-3">Color</h4>
            <div className="inline-block !ml-0">
              <input
                type="radio"
                name="color"
                hidden
                id="color1"
                class="peer"
              />
              <label
                htmlFor="color1"
                className="cursor-pointer bg-primary peer-checked:shadow-[0_0_0_2px_rgba(0,0,0,0.3)] peer-checked:shadow-primary border-2 border-white py-1 px-4 rounded"
              ></label>
            </div>
            <div className="inline-block">
              <input
                type="radio"
                name="color"
                hidden
                id="color2"
                class="peer"
              />
              <label
                htmlFor="color2"
                className="cursor-pointer bg-white peer-checked:shadow-[0_0_0_2px_rgba(0,0,0,0.3)] peer-checked:shadow-primary border py-1 px-4 rounded"
              ></label>
            </div>
            <div className="inline-block">
              <input
                type="radio"
                name="color"
                hidden
                id="color3"
                class="peer"
              />
              <label
                htmlFor="color3"
                className="cursor-pointer bg-secondary peer-checked:shadow-[0_0_0_2px_rgba(0,0,0,0.3)] peer-checked:shadow-primary border-2 border-white py-1 px-4 rounded"
              ></label>
            </div>
          </div>
          <div className="mt-10 h-16 flex items-center border-b pb-6">
            <PrimaryButton link="/">ADD TO CART</PrimaryButton>
          </div>
          <div className="py-2 flex space-x-4 mt-3">
            <Link href="/">
              <a>
                <div className="border-2 w-8 h-8 rounded-full hover:bg-slate-200 flex justify-center items-center">
                  <FaFacebookF className="w-4 h-4" />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="border-2 w-8 h-8 rounded-full hover:bg-slate-200 flex justify-center items-center">
                  <FaTwitter className="w-4 h-4" />
                </div>
              </a>
            </Link>
            <Link href="/">
              <a>
                <div className="border-2 w-8 h-8 rounded-full hover:bg-slate-200 flex justify-center items-center">
                  <FaInstagram className="w-4 h-4" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t">
        <h3 className="font-medium">Product Reviews</h3>
      </div>
    </div>
  );
};

export default Product;
