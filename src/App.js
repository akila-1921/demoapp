import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Createuser from './components/CRUD/Createuser';
import EditUser from './components/CRUD/EditUser';
import ExpensiveAppPage1 from './components/ExpensiveApp/Expensiveapppage1';
import ExpensiveAppPage3 from './components/ExpensiveApp/Expensiveapppage3';
import Digitalwatchtask from './components/Watch/DigitalWatchTask';
import Clock from './components/Watch/DigitalWatchTask';
import Tablepage from './ConnectionComponents/TablePage';
import Inputpage from './ConnectionComponents/InputPage';
import Updatepage from './ConnectionComponents/UpdatePage';
import Example from './ProjectCom/Demofile';
import AdminPanel from './ProjectCom/Adminsidepages/AdminPanel';
import UserRegistrationForm from './ProjectCom/RegisterandLogin/UserRegistration';
import UserLogin from './ProjectCom/RegisterandLogin/UserLoginForm';
import Otpformpage from './ProjectCom/RegisterandLogin/OtpFormPage';
import Instruction from './ProjectCom/RegisterandLogin/Instructionpage';
import Adminfrontpage from './ProjectCom/Adminsidepages/AdminFrontPage';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<Createuser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/> */}
          {/* <Route path='/' element={<ExpensiveAppPage1/>}/>
          <Route path='/edit/:id' element={<ExpensiveAppPage3/>}/> */}
          {/* <Route path='/' element={<Clock/>}/> */}
          {/* <Route path='/' element={<Adminfrontpage/>}/> */}
          {/* <Route path='/' element={<Question/>}/> */}
          {/* <Route path='/' element={<Adminpanel/>}/> */}

          {/* <Route path='/' element={<Tablepage/>}/>
          <Route path='/Reg' element={<Inputpage/>}/>
          <Route path='/edit/:id' element={<Updatepage/>}/> */}
          {/* <Route path='/' element={<Example/>}/> */}
          {/* <Route path='/' element={<AdminPanel/>}/> */}
        {/* </Routes> */}
        
      {/* </BrowserRouter> */}
       {/* <BrowserRouter>
      <Routes>
        <Route path='/register'  element={<UserRegistrationForm/>}/>
        <Route path='/login'  element={<UserLogin/>}/>
        <Route path='/sendotp' element={<Otpformpage/>}/>
        <Route path='/verify' element={<Otpformpage/>}/>
        <Route path='/instruction' element={<Instruction/>}/>
      </Routes>
      </BrowserRouter> */}
      <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Adminfrontpage/>}/>
      </Routes>
      </BrowserRouter>

          
     
    </div>
  );
}

export default App;
