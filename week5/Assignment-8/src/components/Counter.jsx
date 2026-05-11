import {useState} from "react";

function Counter(){
    console.log("Counter rendered")
    //state
    const [count,setCount]=useState(0);

    //functions to modify the state
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        setCount(count -1);
    };
    const reset=()=>{
          reset(count-count);
    }
    console.log("counter component");
    return(
        <div className="text-center p-10 border">
            <h1 className="">Count:{count}</h1>
             <button onClick={increment}> Increment (+)</button>
        <button onClick={decrement}>Decrement (-)</button>
        <button onClick={reset}>reset</button>
        </div>
    )
}
export default Counter; 