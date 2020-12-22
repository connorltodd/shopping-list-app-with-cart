import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState([]);

  const addToCart = (productToAdd) => {
    console.log(productToAdd);
    setCartProducts([...cartProducts, productToAdd]);
  };
  return (
    <CartContext.Provider value={{ cartProducts, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
