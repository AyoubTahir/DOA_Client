import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-10">
      <ul className="flex space-x-3">
        <li className="py-1 px-3 border hover:bg-primary hover:text-white flex items-center">
          <FiArrowLeft />
        </li>
        <li className="py-1 px-3 border hover:bg-primary hover:text-white">
          1
        </li>
        <li className="py-1 px-3 border hover:bg-primary hover:text-white">
          2
        </li>
        <li className="py-1 px-3 border hover:bg-primary hover:text-white">
          3
        </li>
        <li className="py-1 px-3 border hover:bg-primary hover:text-white">
          4
        </li>
        <li className="py-1 px-3 border hover:bg-primary hover:text-white flex items-center">
          <FiArrowRight />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
