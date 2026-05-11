//Write a function that receives an array,
//  & search element as args and returns the index of that search element in the array.
//  It should return "not found" when search element not found.

function search(arr,key){
    let k=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
            console.log("index = ",i)
            k++
        }
        else{
            continue
        }
    }
    if(k!=1){
        console.log("not found")
    }
}
let arr=[90,78,65,98]
result=search(arr,99)