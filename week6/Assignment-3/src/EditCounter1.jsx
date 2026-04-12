import { useContext } from "react";
import { counterContextObj } from "./Context/ContextProvider";

function EditCounter1({ id }) {
    // Pull the shared state
    const { counter, Increment, Decrement } = useContext(counterContextObj);

    return (
        <div className="border-2 border-gray-400 p-5 m-2 rounded-lg text-center bg-white shadow-sm">
            <h2 className="text-xl font-bold">Counter  {id}</h2>
            <p className="text-4xl my-4 text-blue-600 font-mono">{counter}</p>
            
            <div className="flex justify-center gap-4">
                <button onClick={Increment} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
                <button onClick={Decrement} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
            </div>
        </div>
    );
}

export default EditCounter1;
