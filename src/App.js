import React from "react";
import ProductList from "./components/ProductList";
import CartContextProvider from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <ProductList />
      </CartContextProvider>
    </div>
  );
}

export default App;
