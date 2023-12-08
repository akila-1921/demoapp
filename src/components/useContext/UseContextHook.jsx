import React, { useState } from 'react'
import File1 from './File1';
export const  a = React.createContext();

export default function UseContextHook() {
    const arr = [];
    const [sname,setSname] = useState('')
    const [vals,setVals] = useState(arr)

    function Reg(evnt){
        evnt.preventDefault();
        setVals((names)=>[...names,sname])
        console.log(vals);
    }
  return (
    <div>
        <form onSubmit={Reg}>
            <input type="text" value = {sname} onChange={(e)=>setSname(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>

        <a.Provider value = {vals}>
            <File1/>
        </a.Provider>
        
    </div>
  )
}

