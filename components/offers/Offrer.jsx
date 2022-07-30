import Image from "next/image";
import { offerImage } from "../../public/assets/images";
import PrimaryButton from "../ui/PrimaryButton";

const Offrer = ({ number, title, subtitle }) => {
  return (
    <div className="flex flex-col-reverse sm:flex-row md:w-1/2 px-8 justify-between py-8 bg-[#FBE3E4]">
      <div className="pt-4">
        <h3 className="text-primary text-xl">{number}</h3>
        <h4 className="text-lg font-medium">{title}</h4>
        <p className=" font-light mb-8">{subtitle}</p>
        <PrimaryButton link="/">Shop Now</PrimaryButton>
      </div>
      <div className="flex justify-center">
        <Image src={offerImage} alt="Logo" width={200} height={180} />
      </div>
    </div>
  );
};

export default Offrer;
