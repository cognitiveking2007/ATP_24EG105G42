//ASSIGNMENT 2:
//-------------
//Student Performance Dashboard

//You are working on a college result analysis system.

//Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//Tasks:
   // 1. filter() students who passed (marks ≥ 40)
   let filter1=students.filter(students=>students.marks>=40)
   console.log("1.students who passed (marks ≥ 40) are ",filter1)
    //2. map() to add a grade field
            //  ≥90 → A
           //   ≥75 → B
            //  ≥60 → C
            //  else → D
            let grade;
let map1 = students.map(student => 
    {  
        if (student.marks >= 90) 
            grade = "A"; 
        else if (student.marks >= 75) 
            grade = "B"; 
        else if (student.marks >= 60) 
            grade = "C"; 
        else 
            grade = "D"; 
       return {
        student,
        grade
       } 
    })
    console.log("2.Students object with added property grades ",map1)
   //3. reduce() to calculate average marks
   let reduce1=students.reduce((accumulator,student)=>accumulator+student.marks,0)
   let avg=(reduce1/students.length)
   console.log("3.average marks are ",avg)
  // 4. find() the student who scored 92
  let find1=students.find(students=>students.marks===92)
  console.log("4.  The student who scored 92 is ",find1)
  // 5. findIndex() of student "Kiran"
  let findi=students.findIndex(students=>students.name=="Kiran")
  console.log("5.Index() of student Kiran",findi)