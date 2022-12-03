import React from "react";

const ProductsList = ({ cartItems }) => {
  const listItems = cartItems.map(({ id, name, price }) => (
    <li className="products__list-item" key={id}>
      <span className="products__item-name">{name}</span>
      <span className="products__item-price">${price}</span>
    </li>
  ));

  const total = cartItems.reduce((acc, { price }) => acc + price, 0);

  return (
    <div className="products">
      <ul className="products__list">{listItems}</ul>
      <div className="products__total">Total: ${total}</div>
    </div>
  );
};

export default ProductsList;
