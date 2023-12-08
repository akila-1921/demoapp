import React, {useMemo, useState} from 'react'

export default function Usememotask() {
    const [values, setvalues] = useState(0);
    const [values1,setvalues1] = useState(0);
    function inc(){
      setvalues1((e)=>e+1)
    }
    function Increment(){
        setvalues((e)=>e+1)

    }
    const Multiple = useMemo(()=>{
        return values*2
    },[values])
    
  return (
    <div>
       <h2>Increment Value:{values}</h2>
       <h2>Multiplied Value:{Multiple}</h2> 
       <button onClick={inc}>INC VALUE</button>
       <button onClick={Increment}>MULTIPLE VALUE</button>
    </div>
  )
}
