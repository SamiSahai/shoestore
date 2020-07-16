import React from "react";
import { Link } from "react-router-dom";

import Shoes from "./../shoe.json";

function Product() {
  return (
    <div>
      <h1>Welcome to Your Product</h1>
      <div className="productContainer">
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <Link key={keyName} className="link" to={`/product/${keyName}`}>
              <h4>{shoe.name}</h4>

              <img src={shoe.img} height="300px" width="287px" alt="" />
              <h2>{shoe.price}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
