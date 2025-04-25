import react,{ useEffect,useState} from "react";

function Counter(){   
var data;
useEffect(()=>{ 
const data = new Date();
console.log(data);
},1000);


return(
<div>
<p>{data}</p>
</div>
)};

export default Counter;