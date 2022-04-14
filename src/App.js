import { Fragment } from "react";
import Cart from "./components/Cart/Cart.component";

import Header from "./components/Layout/Header.component";
import Meals from "./components/Meals/Meals.component";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
