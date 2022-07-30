import Image from "next/image";
import logo from "../public/assets/images/logo.svg";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#f3f3f3] mt-14">
        <div className="container">
          <div className="lg:flex lg:items-center py-16 lg:space-x-16 space-y-10">
            <div className="lg:w-1/3">
              <Image src={logo} alt="Logo" width={120} height={26} />
              <p className="text-sm mt-2">
                Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text
                used in laying out print, gra phic or web designs the passage.
              </p>
              <h3 className="text-lg font-medium mt-4 mb-3">NEWSLETTER</h3>
              <div className="">
                <input
                  type="text"
                  className="py-2 px-3 w-48 sm:w-54 lg:w-48 xl:w-54  bg-transparent border-t border-b border-l border-slate-300 outline-none rounded-l-md placeholder:text-sm"
                  placeholder="Your email address."
                />
                <button className="bg-primary text-white py-[9px] px-4 sm:px-8 lg:px-4 xl:px-8 rounded-r-md">
                  Search
                </button>
              </div>
            </div>
            <div className="sm:flex lg:w-2/3 sm:space-x-12">
              <div className="sm:w-1/3 md:w-1/4">
                <h3 className="text-lg font-medium mt-4 mb-3">MY ACCOUNT</h3>
                <ul className="font-light">
                  <li className="py-2">
                    <Link href="/">
                      <a>Orders</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Wishlist</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Track Order</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Manage Account</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Return Order</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/3 md:w-1/4">
                <h3 className="text-lg font-medium mt-4 mb-3">INFORMATION</h3>
                <ul className="font-light">
                  <li className="py-2">
                    <Link href="/">
                      <a>Orders</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Wishlist</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Track Order</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Manage Account</a>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/">
                      <a>Return Order</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sm:w-1/3 md:w-2/4">
                <h3 className="text-lg font-medium mt-4 mb-3">CONTACT</h3>
                <ul className="font-light">
                  <li className="py-2 flex space-x-3">
                    <FiMapPin className="w-6 h-6" />
                    <p>
                      7895 Dr New Albuquerue, NM 19800, United States Of America
                    </p>
                  </li>
                  <li className="py-2 flex space-x-3">
                    <FiPhone className="w-4 h-4" />
                    <p>+566 477 256, +566 254 575</p>
                  </li>
                  <li className="py-2 flex space-x-3 items-center">
                    <FiMail className="w-4 h-4" />
                    <p>info@domain.com</p>
                  </li>
                  <li className="py-2 flex space-x-4 mt-3">
                    <Link href="/">
                      <a>
                        <div className="bg-[#3B5998] w-8 h-8 rounded-full text-white flex justify-center items-center">
                          <FaFacebookF className="w-4 h-4" />
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div className="bg-[#00ACEE] w-8 h-8 rounded-full text-white flex justify-center items-center">
                          <FaTwitter className="w-4 h-4" />
                        </div>
                      </a>
                    </Link>
                    <Link href="/">
                      <a>
                        <div className="bg-[#D53982] w-8 h-8 rounded-full text-white flex justify-center items-center">
                          <FaInstagram className="w-4 h-4" />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container">
          <p className="text-white py-3">© RAFCART - All Rights Reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
