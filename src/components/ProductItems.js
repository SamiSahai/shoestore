import React from "react";
import { useParams } from "react-router-dom";
import Shoes from "./../shoe.json";

function ProductItems() {
  const { id } = useParams();
  const shoe = Shoes[id];

  if (!shoe) return <h2>Product Not Found!</h2>;

  return (
    <div>
      <h1>Welcome to the product ProductItems</h1>
      <div className="link">
        <h4>{shoe.name}</h4>
        <img src={shoe.img} height={500} alt="shoe" />
        <h2>{shoe.price}</h2>
      </div>
      <button>add to cart</button>
    </div>
  );
}

export default ProductItems;
