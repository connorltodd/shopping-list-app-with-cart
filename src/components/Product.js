import React from "react";

function Product(props) {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.image} height="100" width="100" />
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Product;
