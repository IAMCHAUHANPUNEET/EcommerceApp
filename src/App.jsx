import React, { useState } from "react";
import FilterSidebar from "./components/FilterSidebar";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Handler for filtering
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  // Handler for sorting
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="App">
      <h1>Ecommerce App</h1>
      <div className="content">
        <FilterSidebar
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        <ProductList
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </div>
    </div>
  );
}

export default App;
