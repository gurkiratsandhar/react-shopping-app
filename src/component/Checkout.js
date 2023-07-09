import React from "react";
import uniqid from "uniqid";

function Checkout({ products, inputChange, plusChange, minusChange }) {
  const map = products.map((item) => {
    return Number(item[2].slice(2)) * Number(item[3]);
  });

  console.log(map);

  const total = map.reduce((item, total) => {
    return total + item;
  }, 0);

  return (
    <div className="checkout">
      <h3>Your Shopping list</h3>
      {products.map((item) => {
        return (
          <div className="checkdiv" key={uniqid()}>
            <img className="checkpic" src={item[0]}></img>
            <div className="checktext">{item[1]}</div>
            <div className="checktext">{item[2]}</div>
            <div>
              <button onClick={minusChange} className="checkbtn">
                -
              </button>
              <input
                onChange={inputChange}
                type="text"
                className="checkinput"
                value={item[3]}
              ></input>
              <button onClick={plusChange} className="checkbtn">
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className="checktotal">Total = $ {Math.round(total)}</div>
    </div>
  );
}

export default Checkout;
