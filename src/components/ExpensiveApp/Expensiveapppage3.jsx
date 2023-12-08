import axios from 'axios';
import React,{useEffect, useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function ExpensiveAppPage3() {

    const {id} = useParams();
    const navi = useNavigate();

    const UProduct = useRef("");
    const UPrize = useRef("");
    const UDate = useRef("");

    useEffect(()=>{
        axios.get('https://6503ec69c8869921ae244598.mockapi.io/akila/'+id)
        .then((res)=>{
            UProduct.current.value = res.data.Productname;
            UPrize.current.value = res.data.Prize;
            UDate.current.value = res.data.Date;
        })
    },[])

    function UpdateUser(e){
        // e.preventDefault();
        axios.put('https://6503ec69c8869921ae244598.mockapi.io/akila/'+id, {
            Username: UProduct.current.value,
            Prize: UPrize.current.value,
            Date: UDate.current.value
        })
        .then(alert("updated"))
        .catch(error=>{console.log(error)})
        navi('/')
    }
    
    return (
        <div className='container'>
            <form className="form row" >
                <div className="col-8">
                    <label htmlFor="" className="form-label">Product name</label>
                    <input type="text" className="form-control" ref={UProduct} />
                </div>
                <div className="col-8">
                    <label htmlFor="" className="form-label">Prize</label>
                    <input type="number" className="form-control" ref={UPrize} />
                </div>
                <div className="col-8">
                    <label htmlFor="" className="form-label">Date</label>
                    <input type="date" className="form-control" ref={UDate} />
                </div>
                <div className="col-8 mt-2">
                <button onClick={UpdateUser} className="btn btn-primary">Submit</button>
                <button className='btn btn-danger'>Cancel</button>
                {/* <button className='btn btn-success' onClick={()=>{updateuser(items.id)}}>Update</button>
                 <button className='btn btn-danger' onClick={()=>{deleteuser(items.id)}}>Delete</button> */}
                </div>
            </form>
            <br />
            <br />
        </div>
    )
}
