import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import ProductItems from "./components/ProductItems";
import NavBar from "./components/NavBar";

import "./App.css";

function RouterConfig() {
  return (
    <div className="Route">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} color="gray" />
        <Route path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route path="/product/:id" component={ProductItems} />
        <Route path="*" component={() => <h2> </h2>} />
      </Router>
    </div>
  );
}

export default RouterConfig;
