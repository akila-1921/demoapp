import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function ViewUser() {

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
  return (
    <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    views.map((items)=>{
                        return(
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Username}</td>
                                <td>{items.Password}</td>
                                <td>{items.Phone}</td>
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
  )
}
