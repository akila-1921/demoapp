
import React,{useState,useEffect} from 'react';
import './DarkandLightcss.css';
import { a } from './darkandLighttheme';

export default function LightThemefunction() {
    const [Theme,setTheme] = useState('');
     const changeTheme=()=>{
         setTheme(!Theme)
     }

     useEffect(()=>{
         if(Theme== true){
             document.body.classList.add("dark");
         }else{          
               document.body.classList.remove("dark");
         }
     })

    return(
        <div>
            <button onClick={changeTheme}>ChangeTheme</button>
            <h1>Theme Concept in React</h1>
            <h2>Dark and Light Theme</h2>
            <div className='Form'>
                <h2>Enter Your Details</h2>
                <form action="">
                    <input type="text" placeholder='Username' /> <br /> <br />
                    <input type="text" placeholder='Password' /> <br /> <br />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    );
}
