import React, { Component } from "react";

import CartTitle from "./CartTitle";
import ProductsList from "./ProductsList";

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: 1,
          name: "Camaz",
          price: 999,
        },
        {
          id: 2,
          name: "Camaro",
          price: 1999,
        },
        {
          id: 3,
          name: "Jiguly",
          price: 5,
        },
      ],
    };
  }

  render() {
    const { userName } = this.props;
    return (
      <div className="column">
        <CartTitle
          userName={userName.firstName}
          count={this.state.cartItems.length}
        />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;
