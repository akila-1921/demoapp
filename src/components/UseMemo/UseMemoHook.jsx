import React, { useMemo, useState } from 'react'

export default function UseMemoHook() {

        const [vals,setVals] = useState(0);
    function Inc(){
        setVals((e)=>e+1)
        // setVals((c)=>c*2)
    }
    const MemValue = useMemo(()=>{
        return vals*2
    })
  return (
    <div>
        <h1>Incremented Value:{vals}</h1>
        <h1>Multiplied Value:{MemValue}</h1>
        <button onClick={Inc}>Click Me</button>
        {/* <button onClick={MemValue}>Click</button> */}
    </div>
  )
}
