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
    {
      id: 4,
      brand: "Samsung",
      model: "M31",
      price: 400,
    },
    {
      id: 5,
      brand: "Samsung",
      model: "F41",
      price: 900,
    },
    {
      id: 6,
      brand: "Nokia",
      model: "Series 5",
      price: 1000,
    },
    {
      id: 7,
      brand: "OnePlus",
      model: "Realme X",
      price: 800,
    },
    {
      id: 8,
      brand: "Google",
      model: "Pixel 5",
      price: 900,
    },
    {
      id: 9,
      brand: "Samsung",
      model: "S22",
      price: 1000,
    },
  ];

  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default ProductList;
