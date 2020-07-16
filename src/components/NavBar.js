import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="link">
      <Link to="/" color="white">
        Home{" "}
      </Link>

      <Link to="about"> About </Link>

      <Link to="product"> Product </Link>
    </div>
  );
}

export default NavBar;
