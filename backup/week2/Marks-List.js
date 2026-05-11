//Assignment 3: Student Marks List
//--------------------------------
//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];

//Tasks:
   // 1. filter() marks ≥ 40 (pass marks)
   let filter1=marks.filter(marks=>marks>=40)
   console.log("1. marks ≥ 40 (pass marks) are ",filter1)
   // 2. map() to add 5 grace marks to each student
   let map1=marks.map(marks=>marks+5)
   console.log("2. added 5 grace marks to each student",map1)
    //3. reduce() to find highest mark
    let reduce1=marks.reduce((accumulator,marks)=>accumulator>marks?accumulator:marks)
    console.log("3.highest mark is",reduce1)
    //4. find() first mark below 40
    let find1=marks.find(marks=>marks<40)
    console.log("4.  first mark below 40 is",find1)
   //5. findIndex() of mark 92
   let findi1=marks.findIndex(marks=>marks==92)
   console.log("5. Index() of mark 92 is ",findi1)