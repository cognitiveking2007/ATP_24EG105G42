
import { createContext, useState } from "react";

export const counterContextObj = createContext();

function ContextProvider({ children }) { 
    const [counter, setCounter] = useState(10);
    const Increment = () => setCounter(counter + 1);
    const Decrement = () => setCounter(counter - 1); 

    return (
        <counterContextObj.Provider value={{ counter, Increment, Decrement }}>
            {children} 
        </counterContextObj.Provider>
    );
}

export default ContextProvider;
