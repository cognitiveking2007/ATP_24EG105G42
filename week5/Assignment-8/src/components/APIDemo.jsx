/*
useEffect(()=>{},[]);*/
import { useEffect, useState } from "react";
function APIDemo(){
    console.log("Api demo renderes")
let [count,setCount]=useState(100);
let [loading,setLoading]=useState(false);
let [error,setError]=useState(null);
const ChangeCount=()=>{
    setLoading(true);
    setCount(count+1);
    };
    useEffect(()=>{
       async function getData() {
        try{
            let res=await fetch('https://fakestoreapi.com/products');
            let usersList=await res.json();
        }catch(err){
            console.log("err is",err);
        }finally{
             setError(false);
        }
        console.log("Use effect executed");
       }
    
    //call
    getData();    
     } ,[]);
     if(loading===true){
     return <p className="text-center text-red-500 text-5xl">Loading........</p>
     }
     if(error!=null){
        return <p className="text-center text-red-500 text-5xl">{error}</p>
     }

     return(
    <div className="text-center mt-15">
     <h1 className="text-8xl text-red-400">List of products</h1>
     <div>
        {users.map((userobj)=>(
            <div key ={userobj.id}> <p>
             <p>{userObj}</p>
            </p>
            </div>
        ))}
     </div>
    </div>
);
}

