import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ExpensiveAppPage2() {
    const {id} = useParams();
    const [views,setViews] =useState([]);

    const navi = useNavigate();

    useEffect(()=>{
        axios.get('https://6503ec69c8869921ae244598.mockapi.io/akila')
        .then(res=>{setViews(res.data)})
        .catch(err=>console.log(err))
    },[])

    function updateuser(id){
        navi('/edit/'+id)
    }
    function deleteuser(id){
        axios.delete('https://6503ec69c8869921ae244598.mockapi.io/akila/'+id)
        .then(alert("deleted"))
        .catch(error=>{console.log(error)})
        navi('/')
    }
     const  [selectyear, setselectyear] = useState(0);
     const startyear = 2020;
     const endyear = new Date().getFullYear();
     const years =[];
     for (let year = endyear; year>=startyear;year--){
        years.push(year);
    
     }
     const Changeyear =(e)=>{
        setselectyear(e.target.value);
     };
     function matchdata() {
        axios.get('https://6503ec69c8869921ae244598.mockapi.io/akila')
          .then((res) => {
            const data = res.data;
            const filteredData = data.filter((item) => {
              const itemYear = new Date(item.Date).getFullYear();
              return itemYear === parseInt(selectyear);
            });
            setViews(filteredData);
          })
          .catch((err) => console.log(err));
      }
  return (
    <> 
    <div>
    <p>Select year <select value={selectyear} onChange={Changeyear} onClick={matchdata}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select></p>
    </div>
    <div className='container'>
        <table className="table">
        
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ProductName</th>
                    <th>Prize</th>
                    <th>Date</th>
                    {/* <th></th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    views.map((items)=>{
                        return(
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Productname}</td>
                                <td>{items.Prize}</td>
                                <td>{items.Date}</td>
                                {/* <td>{new Date(items.Date).getFullYear()}</td> */}
                                <td>
                                    <button className='btn btn-success' onClick={()=>{updateuser(items.id)}}>Update</button>
                                    <button className='btn btn-danger' onClick={()=>{deleteuser(items.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}
