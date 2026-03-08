//A function that receives an array as arg and return their sum
function sum(marks){
let sum=0;
for(let i=0;i<marks.length;i++){
    sum+=marks[i];
}
return sum;
}
let marks=[90,78,65,98]
result=sum(marks)
console.log(result)