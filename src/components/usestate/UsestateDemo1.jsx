import React from "react"


export default function UseStateDisplay(props){
    return(
        <>
            <h1>{props.valuedata}</h1>
        </>
    )

    // if(props.valuedata === 1){
    //     return(
    //         <>
    //             <h1>Page 1 is displayed</h1>
    //         </>
    //     )
    // }
    // if(props.valuedata === 2){
    //     return(
    //         <>
    //             <h3>Page 2 is displayed</h3>
    //         </>
    //     )
    // }
}