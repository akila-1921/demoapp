import React, { useState } from 'react'

export default function Akila() {
  return (
    <div>
        <Uma name ="akila" />
    </div>
  )
}

let Uma = (e) =>{
    const [akila, agila] = useState(0);
    const handle = () =>{
        agila(akila + 1)
    }

    return(
        <div>
            <h1> My Name is {akila} +  {e.name}</h1>
            <button onClick={handle}>Submit</button>
           
        </div>        
    )
}