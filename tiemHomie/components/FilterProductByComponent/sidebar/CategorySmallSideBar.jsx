import React from "react";
import PriceFilter from "../price/priceFilter";
import CategoryTags from "../Tags/CategoryTag";
const CategorySmallSideBar = ({
  categories,
  productCount,
  value,
  handleSliderChange,
  products,
  setData,
  setSelectedSortOption,
}) => {
  return (
    <div className="sidebar">
      <div className="widget">
        <CategoryTags categories={categories} productCount={productCount} />
      </div>
      <div className="widget">
        <PriceFilter
          // products={products}
          // setData={setData}
          // setSelectedSortOption={setSelectedSortOption}
          value={value}
          handleSliderChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default CategorySmallSideBar;
