import React, { useRef } from 'react'
import ExpensiveAppPage2 from './Expensiveapppage2';
import axios from 'axios';
import './ExpensiveAppcss.css'


export default function ExpensiveAppPage1() {

    const UProduct = useRef("");
    const UPrize = useRef("");
    const UDate = useRef("");

    function Send_Data(e) {
        // e.preventDefault();

        axios.post('https://6503ec69c8869921ae244598.mockapi.io/akila', {
            Productname: UProduct.current.value,
            Prize: UPrize.current.value,
            Date: UDate.current.value
        })
        .then(alert("uploaded"))
        .catch(error=>{console.log(error);})

    }
   

    return (
        <div> <h2 className='head'><b>EXPENSIVE APP</b></h2>
        <div className='container1'>
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
                        <button onClick={Send_Data} className="btn btn-success">Add</button>
                    </div>
                </form>
                <br />
                <br />   
            </div>
            <ExpensiveAppPage2/>
        </div>
        </div>
    )
}
