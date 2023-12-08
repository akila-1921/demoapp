// import React, { useReducer } from 'react'

// export default function UseReducerTask() {

//       const details ={
//           Name :" ",
//           Reg : " ",
//           Year : " "

//         }
//       const [state, dispatch] = useReducer(fun , details);
//       function fun(state,action){
//             switch(action.type){
//               case "TypeName":
//                   return{
//                     setName:action.NewName,
//                     setReg:action.NewReg,
//                     setYear:action.NewYear
//                   };
//               case "PrintName":
//                 return{
//                   setName:state.setName,
//                   setReg:state.setReg,
//                   setYear:state.setYear
//                   };
//                 }
//             }
          
//       function ChangeName(e){
//         dispatch({
//           type:"TypeName",
//           NewName:e.target.value,
//           NewReg:e.target.value,
//           NewYear:e.target.value
//         });
//       }
//       function Submit(){
//         dispatch({
//           type:"PrintName"
//         });
//         console.log(state);
//       }
        


//   return (
//     <div>
//         <input type="text" value={state.NewName} onChange={ChangeName} placeholder='Name'/>
//         <input type="text" value={state.NewReg} onChange={ChangeName} placeholder='Register Number'/>
//         <input type="text" value={state.New} onChange={ChangeName} placeholder='Year'/>
//         <button onClick={Submit} >Click Here</button>
//         <h2>This is for {state.setName} with {state.setReg} in the year {state.setYear} </h2>
//     </div>
//   );
// }



import React, { useReducer } from 'react';
import './useReduerTaskcss.css'

export default function UseReducerTask() {
  const Details = {
    Name: '',
    Reg: '',
    Year: ''
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'TypeName':
        return {
          ...state,
          Name: action.NewName,
          Reg: action.NewReg,
          Year: action.NewYear
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, Details);

  function changeName(e) {
    dispatch({
      type: 'TypeName',
      NewName: e.target.value,
      NewReg: state.Reg,
      NewYear: state.Year
    });
  }

  function changeReg(e) {
    dispatch({
      type: 'TypeName',
      NewName: state.Name,
      NewReg: e.target.value,
      NewYear: state.Year
    });
  }

  function changeYear(e) {
    dispatch({
      type: 'TypeName',
      NewName: state.Name,
      NewReg: state.Reg,
      NewYear: e.target.value
    });
  }

  function Submit() {
    console.log(state);
  }

  return (
    <div>
      <input
        type="text" name="Name" value={state.Name} onChange={changeName} placeholder="Name" />
      <input
        type="text" name="Reg" value={state.Reg} onChange={changeReg} placeholder="Degree" />
      <input
        type="text" name="Year" value={state.Year} onChange={changeYear}placeholder="Year" />
      <button onClick={Submit}>Click Here</button>
      <div>
        <div className="Outer_box">
          <div className="Content_box">
            <div> <img src="https://t4.ftcdn.net/jpg/04/37/53/59/360_F_437535966_BeqAubSzmrhlniUjsJ5NQGj7l7r7yk20.jpg" style={{width:'250px', height:'800px', position:'absolute', left:'0px'}} alt="" /></div>
            
            <h1 style={{fontFamily:'initial', fontSize:'60px',color:''}}>CERTIFICATE</h1>
            <h2 style={{fontFamily:'initial',fontSize:'40px'}}>OF ACHIEVEMENT</h2>
            <h4 style={{fontFamily:"initial"}}>This Certificate is Proudly Presented To:</h4>
            <p style={{fontFamily:"initial", fontSize:'60px'}}>-{state.Name}-</p>
            <p>the degree of</p>
            <h3>the Bachelor of Science</h3>
            <p >in  the Field of </p><p style={{fontFamily:"initial", fontSize:'40px'}}>-{state.Reg}-</p>
            <p>on<h2>-{state.Year}-</h2></p>
             <div>
              <p>SIGN OF THE PRINCIPAL  <img src="https://png.pngtree.com/png-clipart/20220604/original/pngtree-seal-gold-certificate-png-image_7931463.png" alt=""  style={{width:'100px', height:'100px'}}/>HEAD OF EXAMINATIONS</p>
             </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}