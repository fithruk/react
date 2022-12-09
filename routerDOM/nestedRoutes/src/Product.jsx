import React from "react";

const Product = ({ match: { params } }) => {
  return <div className="product">{params.productId}</div>;
};

export default Product;
