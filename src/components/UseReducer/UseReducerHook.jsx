import React, { useReducer } from 'react'

export default function UseReducerHook() {
    const dat = {
        SName:"",
        Age:0
    }
    const  [state,dispatch] = useReducer(Reg,dat);

    function Reg(state,action){

        switch(action.type){
            case "changeName":
                console.log(action.newName);
                return{
                    SName:action.newName,
                    Age:state.Age
                };

            case "incAge":
                return{
                    SName:state.SName,
                    Age:state.Age+1
                };
        }
    }

    function handleChangeName(e){
        dispatch({
            type:"changeName",
            newName:e.target.value
        });
        console.log(e.target.value);
    }

    function handleIncrement(){
        dispatch({
            type:"incAge"
        });
    }
  return (
    <div>
        <input type="text" value={state.SName} onChange={handleChangeName} />
        <button onClick={handleIncrement}>Increment</button>

        <h1>{state.SName} age is {state.Age}</h1>
    </div>
  );
}
