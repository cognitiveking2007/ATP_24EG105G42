//write a function that recieves any no of args and returns their sum
function findSum(...a){
    let sum=a.reduce((accumulator,a)=>accumulator+a)
console.log(sum)

}
findSum(10,20,30,40,50,60,70,80,90)