import  "./project.css";

export function ChildA(props){



console.log(props)



return (

<>


 <div className="box1">

<button style={{backgroundColor:"white" ,fontSize:"25px"}}>{props.type=="simple" ?"Starter": props.type=="plus" ? "Lorem Plus":"Lorem Pro" }</button>
<div>
    <p>✅1lorem ipsum</p>
    <p>✅lorem ispsum,dolor</p>
    <p>✅Monthly Updates</p>
</div>

<h1>{props.type=="simple" ?"Free": props.type=="plus" ? "$32":"$50"}</h1>


<button style={{backgroundColor:props.type=="plus"? "purple":"#8c9fbf", padding:"10px", height:"70px", width:"200px", borderRadius:"10px"}}>Get Started  </button>
 </div>







</>

)



}