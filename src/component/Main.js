import react from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="text-container">
        <div className="text1">Best Online Store of the Year</div>
        <div className="text2">We don't do fashion,we are fashion</div>
        <Link to="/products">
          <button className="btn">Shop Now</button>
        </Link>
      </div>
      <img className="right-img" src={require("../img/mainImg.jpeg")}></img>
    </div>
  );
}

export default Main;
