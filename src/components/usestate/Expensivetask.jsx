import React,{useEffect,useState} from "react"
import './Expensivetaskstylecss.css'
import UseStateDisplay2 from "./Expensivetask2";

export default function Dailyexpense(){

    const [sname,setSname] = useState(0);
    
    return(
        <>
        <div className="Exp_heading">
            <h1>EXPENSIVE APP</h1>
        </div>
        <div className="Adding_exp">
            <div>
                
            <button className="pageonebtn" onClick={()=>setSname(1)} >Add New Expenses</button>
            {/* <button className="Pagetwobtn" onClick={()=>setSname(2)} >Page2</button> */}
            
            </div>
        </div>
        <div className="product_lists">
           <table>
           
           <tr> 
                <td><h3>Date</h3></td>
                <td><h3>Product</h3></td>
                <td><h3>Amount</h3></td>
            </tr>
    
            <tr> 
                <td><h3>10/02/2023</h3></td>
                <td><h3>Mobile</h3></td>
                <td><h3>20,000</h3></td>
            </tr>
            <tr> 
                <td><h3>10/09/2023</h3></td>
                <td><h3>laptop</h3></td>
                <td><h3>50,000</h3></td>
            </tr>
           </table>

        </div>
        
        <UseStateDisplay2 valuedata ={sname} />
        </>
    )
}