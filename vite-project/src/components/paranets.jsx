import React, { useState } from "react"; 
import { Child } from "./child.jsx";   

export function Parent() {
  const [data, setData] = useState(0);

  return (
    <>
      <h1>This is Parent Component</h1>
      <Child data={data} />   
      <button onClick={() => setData(data + 1)}>Increase</button>
    </>
  );
}
