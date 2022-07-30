import Link from "next/link";

const Category = ({ image, title }) => {
  return (
    <Link href="/">
      <a
        className="h-36 md:h-64 flex justify-center items-center text-white bg-cover bg-black relative after:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:right-0 after:bg-[#00000060] after:hover:bg-[#00000040] group"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        <div className="z-10 font-medium text-lg group-hover:scale-110 transition duration-150 ease-out">
          {title}
        </div>
      </a>
    </Link>
  );
};

export default Category;
