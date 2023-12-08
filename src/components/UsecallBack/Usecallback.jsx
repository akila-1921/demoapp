import React, { useCallback, useState } from 'react'

export default function UsecallbackHook() {
   const arr = [ ];
    // const c=useref(null);
    const[Task,setTask]=useState('');
    const [str,setStr]=useState(arr)
    const HandleClick=useCallback(()=>{
    //     if(Task){
    //     setStr([...str,Task])
    //     console.log(str);
    //     }
    // },[Task,str])
    setStr([...str,Task])
    console.log(str);
    })
    const Remove=()=>{
        const array =[...str];
        array.splice(0,1)
        setStr(array);
        
    }
    

  
return(
    <div>
        <button onClick={HandleClick}>submit</button>
        <input type="text" onChange={(e)=>{setTask(e.target.value)}}  />
        {/* <button onClick={Remove}>Remove</button> */}
        <ol>
            {
                str.map((task)=>{
                    return(
                    <li>{task} <button onClick={Remove}>Remove</button></li>
                    )
                })
            }
        </ol>

        </div>
      )
}

 