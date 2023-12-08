import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';

function UserLogin() {
  const [views, setviews] = useState([]);
        const [Email,setemail] = useState();
        const [Password,setpassword] = useState();
        const navi = useNavigate();

        const Handlesubmit = (e) => {
          e.preventDefault();
          axios.post('http://localhost:1001/login', { Email, Password })
            .then(results => {
              if (results.data) {
                setviews(results.data);
                if (Email === results.data.Email && Password === results.data.Password) {
                  alert('Welcome');
                  navi('/sendotp');
                } else {
                  alert('Not valid');
                }
              }else {
                alert('Not valid');
              }
            })
            .catch(error => {
              console.log(error);
            });
        };


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

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                <form class="mx-1 mx-md-4" onSubmit={Handlesubmit}>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c">Your Email</label>
                      <input type="email" id="form3Example3c" class="form-control" name='Email' onChange={(e)=>setemail(e.target.value)} />
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
                  <p>Already have an Account?</p> <br />
                    <a href="/register"><button type="button" class="btn btn-success btn-lg" >Register</button></a>
                  </div>

                </form>
                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    {/* <Link to={'/home'} type="submit" class="btn btn-primary btn-lg ">Login</Link > */}
                    <button onClick={Handlesubmit} type='submit' class="btn btn-primary btn-lg">Login</button>
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

export default UserLogin;
