import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import Product from "../products/Product";
import {
  product1,
  product2,
  product3,
  product4,
} from "../../public/assets/images";

const Recomended = () => {
  return (
    <div className="mt-14">
      <div className="flex justify-between">
        <h1 className="text-2xl sm:text-3xl mb-6 uppercase">
          Recomended For You
        </h1>
        <Link href="/">
          <a className="text-primary hover:text-secondary mt-1">
            See More
            <FiChevronRight className="inline-block ml-2" />
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Product
          image={product1}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
          badge="hot"
        />
        <Product
          image={product2}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
        />
        <Product
          image={product3}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
          badge="New"
        />
        <Product
          image={product4}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
        />
        <Product
          image={product1}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
          badge="hot"
        />
        <Product
          image={product2}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
        />
        <Product
          image={product3}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
          badge="New"
        />
        <Product
          image={product4}
          title="HP Pavilion 15"
          price="$45.00"
          oldprice="$55.00"
          reviews="150"
        />
      </div>
    </div>
  );
};

export default Recomended;
