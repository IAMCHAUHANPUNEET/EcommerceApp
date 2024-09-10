import React from "react";

const FilterSidebar = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      {/* Category Filter */}
      <div>
        <h3>Category</h3>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">All</option>
          <option value="clothing">Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Sort By Price */}
      <div>
        <h3>Sort by Price</h3>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="">None</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
