import React from "react";
import { useState, useEffect } from "react";

function Products({ onclick }) {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetchRequest();
  }, []);

  const fetchRequest = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const result = await response.json();
    console.log(result);
    setproducts(result);
  };

  return (
    <div className="productContainer">
      {products.map((item) => {
        return (
          <div className="product" key={item.id}>
            <div>
              <img className="productImg" src={item.image}></img>
            </div>
            <div className="productTitle">{item.title}</div>
            <div className="productPrice">{`$ ${item.price}`}</div>
            <button className="addbtn" onClick={onclick}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
