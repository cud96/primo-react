import react,{ useEffect,useState} from "react";

function Counter(children){   
var data;
useEffect(()=>{ 
const data = new Date();
console.log(data);
},1000);


return(
<div>
<p>{data}{children}</p>
</div>
)};

export default Counter;