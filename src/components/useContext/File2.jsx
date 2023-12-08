import React, { useContext } from 'react'
import { a } from './UseContextHook'

export default function File2() {
    const b = useContext(a);
  return (
    <div>
        <h1>This is file 2</h1>
        <ol>
          {b.map((q)=><li>{q}</li>)}
        </ol>
    </div>
  )
}
