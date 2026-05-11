//I will call you in 5 minutes
//Promises
//call in 5mins
//pending
//fulfilled or rejected

//promise producer(create promise)
/*const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("Hello how are you ")
        }else{
            rejected("busy ...call you later")
        }
    },5000)
})
//console.log(promiseObj)

//promise consumer
promiseObj
.then((message)=>console.log("message in then:",message))
.catch((errorMessage)=>console.log("error is:",errorMessage))

console.log("hello")
*/
//i will send 10,000 rupees in 10 sec
let futureCondition=false
const promisemon=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("payment done")
        }else{
            rejected("transaction failed")
        }
    },5000)
})
promisemon
.then((message)=>console.log("message in then:",message))
.catch((errorMessage)=>console.log("error is:",errorMessage))