import React,{useState} from "react"
import UseStateDisplay from "./UsestateDemo1";


export default function UseStateDemo(){

    const [sname,setSname] = useState(" ");
    // const [sname,setSname] = useState(0);

    return(
        <>
            <input type="text" onClick={(e)=>setSname(e.target.value)} />
            
            {/* <button onClick={()=>setSname(1)} >Page1</button>
            <button onClick={()=>setSname(2)} >Page2</button>
             */}
            
            <UseStateDisplay valuedata ={sname} />
        </>
    )
}