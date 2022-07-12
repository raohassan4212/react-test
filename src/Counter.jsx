import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((val) => val + 1);
  };
  const dicrement = () => {
    setCount((val) => val - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Dicrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
