import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Otpformpage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [views,setviews] = useState('');
  const navi = useNavigate();



function createotp(e){
    e.preventDefault();
    const generatedOtp = Math.floor(Math.random() * 1000000 + 100).toString();
    // setOTP(generatedOtp);
    // console.log(generatedOtp);
    axios.post('http://localhost:1001/sendotp',{phoneNumber:phoneNumber,OTP:generatedOtp})
    .then(results=>{setviews(results.data)
      navi('/verify')})
    
    .catch(err=>console.log(err))
}
const Handlesubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:1001/verify', { phoneNumber, OTP })
    .then(results => {
      // if (results.data) {
        setviews(results.data);
        if (phoneNumber == results.data.phoneNumber && OTP == results.data.OTP) {
          alert('Welcome');
          navi('/instruction');
        } else {
          alert('Not valid');
        }
      // }
    })
    .catch(error => {
      console.log(error);
    });
};

 function handlesubmit(e){
  e.preventDefault(e);
 }
  

  
  return (
    <div>
      <form style={{ width: '22rem' }} onSubmit={handlesubmit}>
        <div className="form-outline mb-4">
          <label className="form-label" >    Enter Your Mobile Number  </label>
          <input
            type="text" className="form-control"
             onChange={(e)=>setPhoneNumber(e.target.value)} />
             
        </div>

        <button type="button" onClick={createotp} className="btn btn-primary btn-block mb-4">
          Send OTP
        </button>
        
        <div className="form-outline mb-4">
          <label className="form-label" > Enter your OTP</label>
          <input
            type="text" value={OTP}  className="form-control" 
             onChange={(e)=>setOTP(e.target.value)} />
        </div>
        <button type="button" onClick={Handlesubmit} className="btn btn-primary btn-block mb-4">
          Verify OTP
        </button>
        
      </form>
    </div>
  );
}




