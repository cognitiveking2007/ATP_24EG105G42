//The smallest element in marks array
let marks=[90,78,65,98];
let temp=0
for(let j=0;j<marks.length;j++){
    for(let i=0;i<marks.length-1;i++){
    if(marks[i]>marks[i+1]){
        temp=marks[i+1]
        marks[i+1]=marks[i]
        marks[i]=temp
    }
    else{
        break;
    }
}
}
console.log("smallest marks are ",marks[0])