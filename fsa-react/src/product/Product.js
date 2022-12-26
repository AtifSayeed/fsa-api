import React from "react";

const Product = ({ product }) => {
  return <div>
    <h3>{product.brand}</h3>
    <b>$ {product.price}</b>
    <hr />
  </div>;
};
export default Product;
