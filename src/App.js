import React from "react";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ProductList />
        <CartList />
      </CartContextProvider>
    </div>
  );
}

export default App;
