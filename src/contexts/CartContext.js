import React from "react";

export const CartContext = React.createContext(null);

function CartContextProvider(props) {
  const [cartProducts, setCartProducts] = React.useState([]);
  return (
    <CartContext.Provider value={{}}>{props.children}</CartContext.Provider>
  );
}

export default CartContextProvider;
