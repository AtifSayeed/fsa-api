import React from "react";
import './Product.css';

const Product = ({ product }) => {
  return <div  className="col-md-5 offset-md-1">
    <h3>{product.brand}</h3>

    <div className="card">
      <img alt="product" src={product.image} className="card-img-top" width={15} height={200}/>
     <div className="card-body">
     <div className="card-title p-2">
       <b> {product.brand} {product.model}</b><br></br>
       <b>₹ {product.price}</b>
      </div>
     </div>
     <div className="card-footer p-3">
    <button  className="btn btn-success btn-sm">Buy Now</button>
    <span>  </span>
    <button className="btn btn-success btn-sm">Add to Cart</button>
     </div>
    </div>
    <hr />
  </div>;
};
export default Product;
