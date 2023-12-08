import React, { useRef, useState } from 'react'

export default function UseRefHook() {

    const crr = useRef(null);
    const crr1 = useRef(" ");

    const [sta,setSta]=useState(0)
    function chg(){
        
        // crr.current
        const r = Math.floor(Math.random()*255+1);
        const g = Math.floor(Math.random()*255+1);
        const b = Math.floor(Math.random()*255+1);
        
        const rgb = `rgb(${r},${g},${b})`;
        
        crr.current.style.backgroundColor = rgb;
        console.log(crr.current);
    }
    const arr = [];
    function pushdata(){
        crr.current.innerHTML = crr1.current.value;
        
        arr.push(crr1.current.value);
        console.log(arr);
        crr1.current.value = " ";
    }
   function focus(){
    crr1.current.focus();
   }

  return (
    <div>
         {/* for coloring */}
        <button onClick={chg}>Click me</button>
        <h1 ref={crr}>Hello world</h1>

        <button onClick={pushdata}>Push to paragraph</button>
        <button onClick={()=>setSta(sta+1)}>Render</button> 
        <button onClick={focus}> Focus</button><br />
        <input ref={crr1} type="text" />
        <h1>{sta}</h1>
        <ol>
            {
                
                arr.map((q)=>{
                    <li>{q}</li>
                })
            }
            <li>hello</li>
        </ol>
    </div>
  )
}
