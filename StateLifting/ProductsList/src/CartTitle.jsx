import React from "react";

const CartTitle = ({ count, userName: { firstName } }) => {
  return (
    <div className="cart-title">{`${firstName}, you added ${count} items`}</div>
  );
};

export default CartTitle;
