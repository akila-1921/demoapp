import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseStateDemo from './components/usestate/Usestatedemo';
import Useeffectfun from './components/usestate/Useeffect';
import Dailyexpense from './components/usestate/Expensivetask';
import UseContextHook from './components/useContext/UseContextHook';
import UseRefHook from './components/UseRef/UseRefHook';
import DarkandLight from './components/DarkandLightTheme/darkandLighttheme';
import Akila from './Logesh';
import Formtaskfunction from './components/FORMtask/Formtask';
import Userefarrayfunction from './components/UseRef/Userefarraytask'
import ThemeeffectuseContex from  './components/DarkandLightTheme/Themeusingcontext'
import MyComponent from './components/UseRef/Userefarraytask'
import UsecallbackHook from './components/UsecallBack/Usecallback';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Forms from './components/reactbootstrap/forms';
import ReactBsTask from './components/reactbootstrap/reactbstask'
import UseReducerHook from './components/UseReducer/UseReducerHook';
import UseReducerTask from './components/UseReducer/useReducerTask';
import LoginFormtask from './components/DarkandLightTheme/Formtask';
import UseMemoHook from './components/UseMemo/UseMemoHook';
import Usememotask from './components/UseMemo/UsememoTask'; 
import App1 from './components/ExpensiveApp/Yearin react'
import Inputpage from './ConnectionComponents/InputPage';
import Tablepage from './ConnectionComponents/TablePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/> 
      {/* <Inputpage/> */}
      {/* <Tablepage/> */}
  </React.StrictMode>
    // <UseStateDemo/>
    //  <Useeffectfun/> 
    // <Dailyexpense/> 
    // <UseContextHook/> 
    // <UseRefHook/>
    // < DarkandLight/> 
    // <Akila/>
    // <Formtaskfunction/>
    // <Userefarrayfunction/>
    // <ThemeeffectuseContex/>
    // <UsecallbackHook/>
    // <Forms/>
    // <ReactBsTask/>
    // <UseReducerHook/>
    // <UseReducerTask/>
    //<LoginFormtask/>
    // <UseMemoHook/>
    // <Usememotask/>
    // <App1/>
    // < Example/>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
