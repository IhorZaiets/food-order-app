import { Fragment } from "react";

import Header from "./components/Layout/Header.component";
import Meals from "./components/Meals/Meals.component";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
