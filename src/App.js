import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
           <Home/>
          </Route>
          <Route path="/checkout">
            <Header />
           <h2>Checkout</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
