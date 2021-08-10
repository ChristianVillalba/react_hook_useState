// React Basic Hooks Documentation:
// https://reactjs.org/docs/hooks-reference.html

import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function decrease() {
    setCount(count - 1);
  }
  function increase() {
    setCount(count + 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

// ES6 - Destructuring
// const [red, green, blue] = [9 , 132, 227]
// console.log(green)

// uesState returns a Value and a Function so :
// const [count, setCount] = useState(0);
