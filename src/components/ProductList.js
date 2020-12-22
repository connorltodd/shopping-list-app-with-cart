import React from "react";
import Product from "./Product";

class ProductList extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Product
          title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
          price={109.95}
          description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
          category="men clothing"
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        />
      </div>
    );
  }
}

export default ProductList;
