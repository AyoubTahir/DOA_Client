import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className="mt-5 mb-10">
      <Link href="/">
        <a className="text-primary">Home</a>
      </Link>
      <FiChevronRight className="inline-block mx-2" />
      <Link href="/">
        <a>Products</a>
      </Link>
    </div>
  );
};

export default Breadcrumb;
