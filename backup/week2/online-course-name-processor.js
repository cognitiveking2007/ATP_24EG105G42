//Assignment 2: Online Course Name Processor
//------------------------------------------
//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


//Tasks:
   // 1. filter() courses with name length > 5
   let f=courses.filter(courses=>courses.length>5)
   console.log("1. filter() courses with name length > 5 ",f)
   // 2. map() to convert course names to uppercase
   let m=courses.map(courses=>courses.toUpperCase())
   console.log("2. map() to convert course names to uppercase",m)
    /*3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
              */
   let r=courses.reduce((accumulator,courses)=>accumulator.toUpperCase()+("|")+courses.toUpperCase())   
   console.log("single string is",r)     

    //4. find() the course "react"
    let fi=courses.find(courses=>courses==="react")
    console.log("4.  course react is",fi)
    //5. findIndex() of "node"*/
    let findi=courses.findIndex(courses=>courses==="node")
    console.log("5.Index() of node is",findi)