import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function UserRegistrationForm() {
        const [Name,setname] = useState(' ');
        const [Email,setemail] = useState(' ');
        const [Password,setpassword] = useState(' ');
        const [phoneNumber,setphoneNumber] = useState(' ');
        const navi = useNavigate();

        const Handlesubmit=(e)=>{
          e.preventDefault();
            axios.post('http://localhost:1001/register', {
              Name,Email,phoneNumber,Password
                })
            .then(results=>console.log(results))
            .catch(error=>{console.log(error);})
            setname(" ");
            setemail(" ");
            setphoneNumber(" ");
            setpassword(" ");
            
        }


  return (
    <div>
        <section class="vh-150" style={{backgroundColor:"black"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius:"25px"}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" onSubmit={Handlesubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c">Your Name</label>
                      <input type="text" id="form3Example1c" class="form-control" name='Name' onChange={(e)=>setname(e.target.value)} />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" name='Email' onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-phone fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Phone Number</label>
                      <input type="number" id="form3Example4c" class="form-control" name='number' onChange={(e)=>setphoneNumber(e.target.value)} />
                    </div>
                  </div>
               

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c" class="form-control" name='Password' onChange={(e)=>setpassword(e.target.value)} />
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <label class="form-check-label" for="form2Example3">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" class="btn btn-success btn-lg" >Register</button>
                  </div>

                </form>
                <div class="d-flex justify-content mx-4 mb-3 mb-lg-4">
                    <p>Already have an Account?</p> <br />
                    <Link to="/login" type="button" class="btn btn-primary ">Login</Link >
                    {/* <a href="/login"><button >Login</button></a> */}
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

export default UserRegistrationForm;