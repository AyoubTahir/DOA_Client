import { GiHandTruck, GiTakeMyMoney, GiHeadphones } from "react-icons/gi";
import Feature from "./Feature";

const Features = () => {
  return (
    <section className="mt-14">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-center">
        <Feature title="Free Shipping" subtitle="Orders over $200">
          <GiHandTruck className="h-10 w-16 text-primary" />
        </Feature>
        <Feature title="Money Returns" subtitle="30 Days money return">
          <GiTakeMyMoney className="h-10 w-16 text-primary" />
        </Feature>
        <Feature title="24/7 Support" subtitle="Customer support">
          <GiHeadphones className="h-10 w-16 text-primary" />
        </Feature>
      </div>
    </section>
  );
};

export default Features;
