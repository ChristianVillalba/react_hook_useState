import React, { useState } from "react";

function App() {
  const [count] = useState(987);
  function increase() {
    // count++;
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;

// ES6 - Destructuring
// const [red, green, blue] = [9 , 132, 227]
// console.log(green)
