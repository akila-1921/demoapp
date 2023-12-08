// import React, {  useEffect, useState } from "react";
// import './DarkandLightcss.css';
// // import 
// export const t = React.createContext();

// function DarkandLight(){

//     const [Theme,setTheme] = useState(false);
//     const changeTheme=()=>{
//         setTheme(!Theme)
//     }

//     useEffect(()=>{
//         if(Theme== true){
//             document.body.classList.add("dark");
//         }else{
//             document.body.classList.remove("dark");
//         }
//     })

//     return(
//         <div>
//             <button onClick={changeTheme}>ChangeTheme</button>
//             <h1>Theme Concept in React</h1>
//             <h2>Dark and Light Theme</h2>
//             <div>
//                 <form action="">
//                     <input type="text" placeholder="Username"/> <br />
//                     <input type="text" placeholder="Password"/> <br />
//                     <input type="text" placeholder="Emailid"/>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default  DarkandLight;




import React from 'react';
// import DarkThemefunction from './Darktheme';
import LightThemefunction from './Lighttheme';
export const  a = React.createContext();

export default function UseContextHook() {
  return (
    <div>
        

        <a.Provider >
            <LightThemefunction/>
        </a.Provider>
        
    </div>
  )
}

