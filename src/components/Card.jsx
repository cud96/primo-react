/* import { useState } from "react";
 */
function Card(){

    return(
        <div className="rounded-md bg-zinc-950">
            <img 
            src="https://plus.unsplash.com/premium_photo-1678739466642-8b4edf3d75ea?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="borsauno"></img>
            <div className="flex flex-col">
                <h2>Nome della borsa</h2>
            <p>Descrizione dell'articolo</p>
        </div>
        </div>

    )
}
export default Card;