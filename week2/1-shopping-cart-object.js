//ASSIGNMENT 1:
//-------------
//You are building a shopping cart summary for an e-commerce website.

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//Tasks:
    //1. Use filter() to get only inStock products
    let filter1=cart.filter(cart=>cart.inStock==true)
    console.log("1.inStock products are ",filter1)
    //2. Use map() to create a new array with:  { name, totalPrice }
    let map1=cart.map(cart=>({
      name:cart.name,
      totalPrice:cart.price*cart.quantity
    }))
    console.log("2.array with:  { name, totalPrice }",map1)
    //3. Use reduce() to calculate grand total cart value
    let reduce1=cart.reduce((accumulator,element)=>accumulator+(element.price*element.quantity),0)
    console.log("3.grand total cart value is",reduce1)
    //4. Use find() to get details of "Mouse"
    let find1=cart.find(cart=>cart.name=="Mouse")
    console.log("4.find() the details of Mouse",find1)
    //5. Use findIndex() to find the position of "Keyboard"
    let findi=cart.findIndex(cart=>cart.name=="Keyboard")
    console.log("5.Index() to find the position of Keyboard",findi)

