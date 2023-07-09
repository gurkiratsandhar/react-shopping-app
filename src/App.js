import "./App.css";
import React from "react";
import Nav from "./component/Nav";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Contact from "./component/Contact";
import { useState } from "react";
import Checkout from "./component/Checkout";

function App() {
  const [productCount, setproductCount] = useState(0);
  const [products, setproducts] = useState([]);

  const inputChange = (e) => {
    console.log("hi I m input Change");
  };

  const minusChange = (e) => {
    products.forEach((item) => {
      if (item[1] == e.target.parentNode.parentNode.children[1].innerHTML) {
        item[3]--;
        setproductCount((prevState) => prevState - 1);
        setproducts((prevState) => [...prevState]);
      }
    });
    const filteredList = products.filter((item) => item[3] != 0);
    console.log(filteredList);
    setproducts(filteredList);
  };

  const plusChange = (e) => {
    products.forEach((item) => {
      if (item[1] == e.target.parentNode.parentNode.children[1].innerHTML) {
        item[3]++;
        setproductCount((prevState) => prevState + 1);
        setproducts((prevState) => [...prevState]);
      }
    });
  };

  const onclick = (e) => {
    let boolean = true;
    products.forEach((item) => {
      if (item[1] == e.target.parentNode.children[1].innerHTML) {
        boolean = false;
        return item[3]++;
      }
    });
    if (boolean) {
      setproducts((prevState) => [
        ...prevState,
        [
          e.target.parentNode.firstChild.children[0].src,
          e.target.parentNode.children[1].innerHTML,
          e.target.parentNode.children[2].innerHTML,
          1,
        ],
      ]);
    }
    setproductCount((prevState) => prevState + 1);
    console.log(products);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Nav count={productCount} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products onclick={onclick} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                products={products}
                inputChange={inputChange}
                plusChange={plusChange}
                minusChange={minusChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
