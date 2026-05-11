import { Children, createContext } from "react"

export const counterContextObj=createContext()
function ContextProvider() {
    //state
    const[counter,setCounter]=useState(10)
    //function to change state
    const changeCounter=()=>{
         setCounter(counter+1)
    }
  return (
   <counterContextObj.Provider value ={{counter,changeCounter}}>

    {Children}
   </counterContextObj.Provider>
  )
}

export default ContextProvider