//ASSIGNMENT 5: 
//-------------
//Bank Transaction Analyzer

//You are building a bank statement summary.

//Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


//Tasks:
    //1. filter() all credit transactions
    let filter1 = transactions.filter(transaction=>transaction.type=="credit"); 
    console.log("1.Credit transactions:",filter1);
    //2. map() to extract only transaction amounts
    let map1=transactions.map(transaction=>transaction.amount); 
    console.log("2.Transaction amounts:",map1);
   // 3. reduce() to calculate final account balance
   let balance = transactions.reduce((accumulator, transaction)=> 
    { 
      if (transaction.type==="credit") 
        { 
          return accumulator+transaction.amount; 
        } 
   else
     { 
      return accumulator-transaction.amount;
     } 
    }
   ,0); 
   console.log("3.final account balance:", balance);
    //4. find() the first debit transaction
    let find1 = transactions.find(transaction=>transaction.type=="debit"); 
    console.log("4.first debit transaction:", find1);
    //5. findIndex() of transaction with amount 10000
    let findi=transactions.findIndex(transactions=>transactions.amount==10000)
    console.log("5.Index() of transaction with amount 10000 is:",findi)