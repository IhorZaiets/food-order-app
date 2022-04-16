import { useState } from "react";
import Cart from "./components/Cart/Cart.component";

import Header from "./components/Layout/Header.component";
import Meals from "./components/Meals/Meals.component";
import CartProvider from "./store/CartProvider.component";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
