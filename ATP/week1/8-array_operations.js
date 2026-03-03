const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




//1. Insert new Emp at 2nd position
employees.splice(1,0,{eno:109,name:"babu",marks:[99,99,99]})
console.log("new Emp at 2nd position",employees)

//2. Remove an emp with name "Kiran"
employees.splice(4,1)
console.log("deleting an emp with name Kiran",employees)

//3.Change the last mark 95 to 75 of emp  "Sneha"
for(i in employees){
  if(employees[i].name=='Sneha'){
    employees[i].marks.splice(-1,1,75)
  }
}
//employees[3].marks.splice(2,1,75)
console.log(" the last mark 95 to 75 of emp  Sneha",employees)