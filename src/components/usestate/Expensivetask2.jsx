import React from "react"


export default function UseStateDisplay2(props){
    // return(
    // //     <>
    // //         <h1>{props.valuedata}</h1>
            
    // //     </>
    //   )
   
    if(props.valuedata === 1){
        return(
            <>
                {/* <h1>Page 1 is displayed</h1> */}
                <div className="Table_contents">
                    <label htmlFor="" className="">Title</label> <br />
                    <input type="text" className="inp_btn" /> <br /> <br />
                    <label htmlFor="">Amount</label> <br />
                    <input type="number" className="inp_btn" /> <br /> <br />
                    <label htmlFor="">Date</label> <br />
                    <input type="date" className="inp_btn" /> <br /> <br />
                    <a href="/Expensivetask"><button>Add</button></a>
                    <a href="/Expensivetask"><button>Cancel</button></a>
                    
                </div>
                
                
            </>
        )
    }
    
    // if(props.valuedata === 2){
    //     return(
    //         <>
    //             {/* <h3>Page 2 is displayed</h3> */}
    //             <div className="Table">

    //             </div>
    //         </>
    //     )
    // }
}
    