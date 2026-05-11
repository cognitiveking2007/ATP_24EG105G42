//ASSIGNMENT 3:
//-------------
//Employee Payroll Processor

//You are building a salary processing module in a company HR app.

//Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//Tasks:
  //  1. filter() employees from IT department
  let filter1=employees.filter(employees=>employees.department=="IT")
   console.log("1.employees from IT department",filter1)
   // 2. map() to add:
   //         netSalary = salary + 10% bonus
   let map1 = employees.map(emp => 
    ({   emp, 
         netSalary:emp.salary+(emp.salary * 0.10 )

    }));
    console.log("2.Employees with netSalary:", map1);

  //  3. reduce() to calculate total salary payout
  let totalPayout = employees.reduce((accumulator, emp)=>accumulator+(emp.salary + emp.salary * 0.10),0);
   console.log("3.Total salary payout:", totalPayout);
   // 4. find() employee with salary 30000
   let find1 = employees.find(emp=>emp.salary==30000); 
   console.log("4.Employee with salary 30000:", find1);
   // 5. findIndex() of employee "Neha"
   let findIndex1 = employees.findIndex(emp=>emp.name=="Neha"); 
   console.log("5.Index of Neha:", findIndex1);

