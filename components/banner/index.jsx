import Image from "next/image";
import Link from "next/link";
import { banner } from "../../public/assets/images";
const Banner = () => {
  return (
    <div className="mt-16">
      <Link href="/">
        <a>
          <Image src={banner} />
        </a>
      </Link>
    </div>
  );
};

export default Banner;
