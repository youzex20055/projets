import React, { useState } from "react";
import { PRODUCTS as SHIRTS_PRODUCTS } from "../../proshirts";
import { PRODUCTS as ACCESSORIES_PRODUCTS } from "../../proacc";
import { PRODUCTS as PRODUCTS } from "../../products";
import { Product } from "../shop/product";
import "./search.css"; // Assuming you have a separate CSS file for styles


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allProducts = [...SHIRTS_PRODUCTS, ...ACCESSORIES_PRODUCTS, ...PRODUCTS];

  const filteredProducts = allProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;

