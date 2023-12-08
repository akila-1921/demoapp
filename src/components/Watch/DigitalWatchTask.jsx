import React from 'react'
import './DigitalWatchcss.css'

// export default function Digitalwatchtask() {
//   return (
//     <div>
//         <div className="Watch_border">
//             <div className="Watch">

//             </div>
//         </div>
//     </div>
//   )
// }

// import { useState } from "react";
// import "./DigitalWatchcss.css";

// const Clock = () =>{
// //   let time  = new Date().toLocaleTimeString()

//   const [ctime,setTime] = useState()
//   const UpdateTime=()=>{
//    let time =  new Date().toLocaleTimeString()
//     setTime(time)
//   }
//   setInterval(UpdateTime)
//   return (
//     <div className='Watch_border'><h1>{ctime}</h1></div>
//   )
// }
// export default Clock;

import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState({
                          minutes: new Date().getMinutes(),
                          hours:   new Date().getHours(),
                          seconds: new Date().getSeconds()
                        })
  
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(interval);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-us', {
      minimumIntegerDigits: 2
    })
  }
  let  Hours =time.hours;
  if (Hours>12) {
    Hours -= 12;
    
  }
//   if (Hours===0) {
//     Hours=12;
    
//   }


  return (
    // <div className='clock'>
        
    //   <span>{convertToTwoDigit(Hours)}:</span>
    //   <span>{convertToTwoDigit(time.minutes)}:</span>
    //   <span>{convertToTwoDigit(time.seconds)}</span>
    //   <span>{time.hours <=12  ? '  PM' : ' AM'}</span>
    // </div>
    <div className="clock">
      <h1><i>DIGITAL WATCH</i></h1>
      <div className='clk'>
      <div className="hours">{convertToTwoDigit(Hours)}</div>
      <div className="minutes">{convertToTwoDigit(time.minutes)}</div>
      <div className="seconds">{convertToTwoDigit(time.seconds)}</div>
      <div className="ampm">{time.hours >=12  ? '  PM' : ' AM'}</div>
      </div>
    </div>
  );
}

export default Clock;
