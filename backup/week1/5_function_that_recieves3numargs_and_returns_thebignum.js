//function that receives 3 number args and  return the big number 
function bigNumber(a,b,c){
    if(a>b&&a>c){
        console.log("a is big")
    }
    else if(b>c){
        console.log("b is big")
    }
    else{
        console.log("c is big")
    }
}
let result=bigNumber(1,2,3)