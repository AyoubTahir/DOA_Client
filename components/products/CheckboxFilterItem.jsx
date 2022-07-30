import React from "react";

const CheckboxFilterItem = ({ item, index }) => {
  return (
    <div className="relative mb-2">
      <div className="custom_check flex justify-between items-center">
        <input
          type="checkbox"
          hidden
          className="check_inp"
          id={`${item.title}-${index}`}
        />
        <label htmlFor={`${item.title}-${index}`} className="ml-8">
          {item.title}
        </label>
        <p className="inline-block">
          {item.productCount ? `(${item.productCount})` : ""}
        </p>
      </div>
    </div>
  );
};

export default CheckboxFilterItem;
