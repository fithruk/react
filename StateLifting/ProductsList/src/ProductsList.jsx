import React from "react";

const ProductsList = ({ cartItems }) => {
  const listItems = cartItems.map(({ id, name, price }) => (
    <li className="products__list-item" key={id}>
      <span className="products__item-name">{name}</span>
      <span className="products__item-price">${price}</span>
    </li>
  ));

  return (
    <div className="products">
      <ul className="products__list">{listItems}</ul>
      <div className="products__total">
        Total: ${cartItems.reduce((acc, { price }) => acc + price, 0)}
      </div>
    </div>
  );
};

export default ProductsList;
