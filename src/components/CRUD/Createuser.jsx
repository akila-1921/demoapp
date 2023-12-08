import React, { useRef } from 'react'
import ViewUser from './ViewUser';
import axios from 'axios';

export default function Createuser() {

    const UName = useRef("");
    const UPass = useRef("");
    const UPhno = useRef("");

    function Send_Data(e) {
        e.preventDefault();

        axios.post('https://6503ec69c8869921ae244598.mockapi.io/akila', {
            Username: UName.current.value,
            Password: UPass.current.value,
            Phone: UPhno.current.value
        })
        .then(alert("uploaded"))
        .catch(error=>{console.log(error);})

    }

    return (
        <div className='container'>
            <form className="form row" onSubmit={Send_Data}>
                <div className="col-8">
                    <label htmlFor="" className="form-label">Username</label>
                    <input type="text" className="form-control" ref={UName} />
                </div>
                <div className="col-8">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="Password" className="form-control" ref={UPass} />
                </div>
                <div className="col-8">
                    <label htmlFor="" className="form-label">Phone</label>
                    <input type="number" className="form-control" ref={UPhno} />
                </div>
                <div className="col-8 mt-2">
                    <button type='submit' className="btn btn-primary">Submit</button>
                </div>
            </form>
            <br />
            <br />
            <ViewUser />
        </div>
    )
}
