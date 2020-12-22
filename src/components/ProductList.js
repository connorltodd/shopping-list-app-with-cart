import React from "react";
import axios from "axios";
import Product from "./Product";

class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => this.setState({ products: response.data }));
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <Product {...product} />
        ))}
      </div>
    );
  }
}

export default ProductList;
