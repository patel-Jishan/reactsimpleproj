import { useState } from "react";
export function SimpleInterest() {
    const [principal, setPrincipal] = useState(0);
    const [rate, setRate] = useState(0);
    const [time, setTime] = useState(0);
    const [simpleInterest, setSimpleInterest] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    function calculateSI() {
        const simpleInterest = (principal * rate * time) / 100;
        setSimpleInterest(simpleInterest);
        setTotalAmount(principal + simpleInterest);

    }



 
    



return (

    <>
   
    <h1 style={{textAlign:"center"}}>Simple Interest Calculator</h1>
   

<div style={{textAlign:"center" ,display:"flex",flexDirection:"column",alignItems:"center",gap:"10px", backgroundColor:"lightblue",width:"400px",margin:"auto",padding:"20px",borderRadius:"10px", border:"2px solid black",borderShadow:"5px 5px 5px grey",borderRadius:"10px"}}>
<input type="name" name="name" id=""  placeholder="Enter the principal amount" onChange={(e) =>setPrincipal(e.target.value)} />
<input type="name" name="name" id=""  placeholder="Enter the rate of interest" onChange={(e)=>setRate(e.target.value)}/>
<input type="name" name="name" id="" placeholder="Enter th time period" onChange={(e)=>setTime(e.target.value) } />



<button onClick={calculateSI }>Calculate</button>
<div>
    <h2>Simple Interest is: </h2>
    <h2>Total Amount is:</h2>
    <h4>{simpleInterest}</h4>
    <h4>{totalAmount}</h4>
    </div>

</div>

 </>
)}

