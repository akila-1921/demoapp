import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Tablepage() {

  const navi = useNavigate()

  const [views,setViews] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:1000/user')
    .then(res => setViews(res.data))
    .catch(err => console.log(err))
  })

  function SetUpdate(id){
    navi('/edit/'+id)
  }

  function deldata(id){
    axios.delete('http://localhost:1000/deluser/'+id)
    .then(navi('/'))
    .catch(err => console.log(err))
  }

  return (
    
    <div>
      <a href="/reg" className='btn btn-info'>Register</a>
        <div class="table-responsive">
  <table class="table">
    <thead  class="table table-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Password</th>
        <th scope='col'> Link</th>
        <th scope="col">Action</th>

      </tr>
    </thead>
    <tbody>
      {
        views.map((items,index)=>{
          return(
            <tr key={index}>
              <td>{items.Name}</td>
              <td>{items.Email}</td>
              <td>{items.Phone}</td>
              <td>{items.Password}</td>
              <td><a href={`${items.path}`} download={`${items.path}`}>{items.Name}</a></td>
              <td>
                <button className='btn btn-success' onClick={()=>{
                  SetUpdate(items._id)
                }}>Update</button>
                <button className='btn btn-danger' onClick={()=>{
                  deldata(items._id)
                }}>Delete</button>
              </td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
</div>
    </div>
  )
}
