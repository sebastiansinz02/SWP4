import { useState } from "react";

export default function CounterFunc() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Functional Counter</h1>
      <p1>hallo</p1>
      <h2>{count}</h2>
    </div>
  );
}
