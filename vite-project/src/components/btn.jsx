import React, { useState } from "react";

export function Button() {
  const [color, setColor] = useState("green");
   
  let changeColor = () => {
    if(color === "green"){
        setColor("yellow");
  }
  else{
    setColor("green");
  }


  }  
return (
  <body style={{backgroundColor:color}}>
    
  
    <div style={{ textAlign: "center", marginTop: "20px"  }}>
    <button onClick={changeColor} style={{ backgroundColor: color, color: "black", padding: "10px 20px",  border: '2px dotted blue', borderRadius: "5px", cursor: "pointer" }}>
        Color {color }
</button>
<h1> Current color is:{color} </h1>

</div>
</body>
)
}