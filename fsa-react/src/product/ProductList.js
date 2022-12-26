import React from "react";
import Product from "./Product";

const ProductList = () => {
  const data = [
    {
      id: 1,
      brand: "Apple",
      model: "Iphone11",
      price: 800,
    },
    {
      id: 2,
      brand: "Apple",
      model: "Iphone12",
      price: 900,
    },
    {
      id: 3,
      brand: "Apple",
      model: "Iphone13",
      price: 1000,
    },
  ];

  return <div>
      <h1>Products</h1>
      {data.map(product => 
       <Product product={ product } />
      )}
    </div>
  
};
export default ProductList;