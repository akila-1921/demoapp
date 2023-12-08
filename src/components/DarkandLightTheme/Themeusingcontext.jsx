import React,{createContext,useContext,useState} from'react'
import './DarkandLightcss.css'
 const usecon=createContext('');
export default function ThemeeffectuseContext() {
    const[theme,setTheme]=useState('light')
    function handleclick(){
     setTheme((crr)=>crr === "light"?"dark":"light")
    }
  return (
    <div>
        <input type="checkbox" onChange={handleclick} />Change the theme
       
        <usecon.Provider value={theme}>
        <Formdata/>
        </usecon.Provider>

    </div>
   
  )
}
function  Formdata() {
    const a=useContext(usecon);
    return(
        <div style={{width:"100%"}} id={a}>
            <h1 >Dark and light theme</h1>
            
        </div>
    )
    
}