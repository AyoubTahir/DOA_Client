import CheckboxFilter from "./CheckboxFilter";

const Filter = () => {
  const categories = [
    {
      title: "Women",
      productCount: 16,
    },
    {
      title: "Men",
      productCount: 9,
    },
    {
      title: "Shoes",
      productCount: 19,
    },
    {
      title: "Computer",
      productCount: 42,
    },
  ];

  const brands = [
    {
      title: "Adidas",
    },
    {
      title: "Nike",
    },
    {
      title: "Easy",
    },
    {
      title: "Arong",
    },
  ];
  return (
    <div>
      <CheckboxFilter items={categories} title="categories" />
      <CheckboxFilter items={brands} title="brands" />
    </div>
  );
};

export default Filter;
