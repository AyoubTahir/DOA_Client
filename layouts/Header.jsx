import Image from "next/image";
import {
  MenuIcon,
  HeartIcon,
  ShoppingCartIcon,
  AdjustmentsIcon,
  XIcon,
} from "@heroicons/react/outline";
import logo from "../public/assets/images/logo.svg";
import logoWhite from "../public/assets/images/logo-white.svg";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="py-5 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <Image src={logo} alt="Logo" width={120} height={26} />
          <ul className="flex space-x-10 text-lg font-medium">
            <li className="hover:scale-110 hover:text-primary transition duration-150 ease-out">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-primary transition duration-150 ease-out">
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-primary transition duration-150 ease-out">
              <Link href="/">
                <a>Pages</a>
              </Link>
            </li>
            <li className="hover:scale-110 hover:text-primary transition duration-150 ease-out">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/">
              <a className="hover:text-secondary">Login</a>
            </Link>
            <span>/</span>
            <Link href="/">
              <a className="hover:text-secondary">Register</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-primary py-2">
        <div className="container mx-auto flex justify-between">
          <div className="hidden sm:flex md:hidden items-center">
            <Image src={logoWhite} alt="Logo" width={120} height={26} />
          </div>
          <button className="bg-secondary text-white py-2 px-8 rounded hidden md:block">
            <MenuIcon className="h-5 w-5 inline mr-2 mb-1" />
            All categories
          </button>
          <div className="hidden md:block">
            <input
              type="text"
              className="py-2 px-3 w-60 outline-none rounded-l-md placeholder:text-sm lg:w-[20rem] xl:w-[30rem]"
              placeholder="Search product..."
            />
            <button className="bg-secondary text-white py-2 px-8 rounded-r-md">
              Search
            </button>
          </div>
          <button
            className="bg-transparent border text-white py-1 px-4 rounded md:hidden hover:text-secondary"
            onClick={handleMenu}
          >
            <MenuIcon className="h-5 w-5 inline mb-[1px]" />
          </button>
          <div className="text-white text-xs flex items-center space-x-4">
            <Link href="/">
              <a className="flex flex-col items-center relative">
                <div className="bg-black text-center h-4 w-4 rounded-full absolute bottom-4 left-2 text-[10px]">
                  5
                </div>
                <HeartIcon className="h-5 w-5 mb-1" />
                <span>Wish List</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex flex-col items-center">
                <ShoppingCartIcon className="h-5 w-5 mb-1" />
                <span>Cart</span>
              </a>
            </Link>
            <Link href="/">
              <a className="flex flex-col items-center">
                <AdjustmentsIcon className="h-5 w-5 mb-1" />
                <span>Account</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative md:hidden">
        <div
          className={`z-10 bg-secondary text-white absolute w-full transition ease-in duration-300 ${
            toggleMenu && "hidden"
          }`}
        >
          <div className="p-4 flex justify-between">
            <div>
              <Link href="/">
                <a className="hover:text-primary">Login</a>
              </Link>
              <span>/</span>
              <Link href="/">
                <a className="hover:text-primary">Register</a>
              </Link>
            </div>
            <button
              className="bg-transparent text-white py-1 px-4 rounded hover:text-primary"
              onClick={handleMenu}
            >
              <XIcon className="h-5 w-5 inline mb-[1px]" />
            </button>
          </div>
          <ul className="text-center pb-3">
            <li className="py-3 hover:text-primary">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="py-3 hover:text-primary">
              <Link href="/">
                <a>Shop</a>
              </Link>
            </li>
            <li className="py-3 hover:text-primary">
              <Link href="/">
                <a>Pages</a>
              </Link>
            </li>
            <li className="py-3 hover:text-primary">
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
