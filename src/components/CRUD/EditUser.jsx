import axios from 'axios';
import React,{useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    const {id} = useParams();
    const navi = useNavigate();

    const UName = useRef("");
    const UPass = useRef("");
    const UPhno = useRef("");


    useEffect(()=>{
        axios.get('https://6503ec69c8869921ae244598.mockapi.io/akila/'+id)
        .then((res)=>{
            UName.current.value = res.data.Username;
            UPass.current.value = res.data.Password;
            UPhno.current.value = res.data.Phone;
        })
    },[])

    function UpdateUser(e){
        e.preventDefault();
        axios.put('https://6503ec69c8869921ae244598.mockapi.io/akila/'+id, {
            Username: UName.current.value,
            Password: UPass.current.value,
            Phone: UPhno.current.value
        })
        .then(alert("updated"))
        .catch(error=>{console.log(error)})
        navi('/')
    }
    return (
        <div className='container'>
            <form className="form row" onSubmit={UpdateUser}>
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
        </div>
    )
}
