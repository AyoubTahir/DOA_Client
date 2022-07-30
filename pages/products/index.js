import Filter from "../../components/products/Filter";
import Product from "../../components/products/Product";
import Breadcrumb from "../../components/ui/Breadcrumb";
import Pagination from "../../components/ui/Pagination";
import {
  product1,
  product2,
  product3,
  product4,
} from "../../public/assets/images";

const Products = () => {
  return (
    <div className="container">
      <Breadcrumb />
      <div className="flex">
        <div className="hidden md:block md:w-1/4 pl-2 pr-10">
          <Filter />
        </div>
        <div className="w-full md:w-3/4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Products;
