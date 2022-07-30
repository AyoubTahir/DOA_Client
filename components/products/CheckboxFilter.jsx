import React from "react";
import CheckboxFilterItem from "./CheckboxFilterItem";

const CheckboxFilter = ({ items, title }) => {
  return (
    <div className="b border-b pb-4 mb-4 last:mb-0">
      <h1 className="text-xl mb-5 uppercase">{title}</h1>
      {items.map((item, index) => (
        <CheckboxFilterItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CheckboxFilter;
