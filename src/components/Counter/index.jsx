import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount(prevCOunt => prevCOunt + 1);
  }
  return (
    <div>
      <button onClick={handleChange}>Count {count}</button>
    </div>
  );
};

export default Counter;
