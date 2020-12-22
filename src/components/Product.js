import React from "react";
import { CartContext } from "../contexts/CartContext";

function Product(props) {
  const { addToCart } = React.useContext(CartContext);
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} height="100" width="100" />
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
      {props.addProductToCart && (
        <button onClick={() => addToCart(props)}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product;
