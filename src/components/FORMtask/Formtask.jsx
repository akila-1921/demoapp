import { useState } from "react";
import './Formtaskcss.css';
 export default   function Formtaskfunction() {
  const [inputs, setInputs] = useState('');
  

  const Change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const Submit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
   <>
    <form onSubmit={Submit} className="form">
      <label>Enter your name:
      <input  type="text"  name="username"  value={inputs.username} onChange={Change}  />
      </label> <br /> <br />
      <label>Enter your age:
      <input  type="number"  name="age"  value={inputs.age}  onChange={Change} />
      </label> <br /> <br />
      <label>Enter your Number:
      <input  type="text"  name="number"  value={inputs.number}  onChange={Change} />
      </label> <br /> <br />
      <button onClick={Submit}>Submit</button>
      
    </form>
    <div className="Details">
        <p>Your name: {inputs.username}</p>
        <p>Your age: {inputs.age}</p>
        <p>Your number: {inputs.number}</p>
      </div>
   </>
    
  )
}


