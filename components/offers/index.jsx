import Offrer from "./Offrer";

const Offers = () => {
  return (
    <div className="md:flex space-y-6 md:space-y-0 md:space-x-6 mt-14">
      <Offrer
        number="30% offer"
        title="Free Shipping"
        subtitle="Attractive Natural Furniture"
      />
      <Offrer
        number="50% offer"
        title="Flash Sale"
        subtitle="Attractive Natural Furniture"
      />
    </div>
  );
};

export default Offers;
