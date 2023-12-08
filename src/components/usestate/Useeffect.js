import React,{useEffect,useState} from "react"
export default function Useeffectfun(){
    const arr = ["Redmi", "Lenovo", "MI"]
    const [count1, setCount1] = useState(arr);
    const [count2, setCount2] = useState(0);
    useEffect(()=>{
        console.log(count1);
    },[count1])
    return(
        <>
        <h1>USESTATE1 = {count1}</h1>
        <button onClick={()=>setCount1(count1+1)}>Count one</button>
        <h1>USESTATE2 = {count2}</h1>
        <button onClick={()=>setCount2(count2+1)}>Count one</button>
        
        
        </>
    )
}