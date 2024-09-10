import React from "react";

const productsData = [
  { id: 1, name: "T-shirt", category: "clothing", price: 20 },
  { id: 2, name: "Headphones", category: "electronics", price: 50 },
  { id: 3, name: "Sunglasses", category: "accessories", price: 30 },
  { id: 4, name: "Laptop", category: "electronics", price: 600 },
  { id: 5, name: "Jeans", category: "clothing", price: 40 },
];

const ProductList = ({ selectedCategory, sortOption }) => {
  // Filter by category
  const filteredProducts = selectedCategory
    ? productsData.filter((product) => product.category === selectedCategory)
    : productsData;

  // Sort by price
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "highToLow") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="product-list">
      {sortedProducts.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
