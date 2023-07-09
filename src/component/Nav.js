import react from "react";
import { Link } from "react-router-dom";

function Nav({ count }) {
  return (
    <div className="nav">
      <Link to="/">
        <img src={require("../img/header.png")}></img>
      </Link>
      <ul className="nav-list">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/checkout">
          <li>
            <span className="bell">
              <img className="cart" src={require("../img/cart.png")}></img>
              <span className="bellnumbers">{count}</span>
            </span>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
