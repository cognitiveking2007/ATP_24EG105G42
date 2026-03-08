//Problem Statement: Library Book Management System
//-------------------------------------------------
//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
  //Create a Book class with the following:
 class Book{

  //Properties:
      title; //(string)
      author; //(string)
      pages; //(number)
      isAvailable=true; //(boolean, default: true)
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

  //Methods:
  //- Marks the book as not available
      borrow(title){
       this.isAvailable=false
       console.log(this.isAvailable)
      } 
      //- Marks the book as available
      returnBook(title){
        this.isAvailable=true
        console.log(this.isAvailable)
      } 
      //Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      getInfo(title){
      if(title==this.title){
        console.log(`The ${this.title} by ${this.author} (${this.pages})`)
      }
      }
      //- Returns true if pages > 300, false otherwise
      isLongBook() {
        if(this.pages>300){
            return true
        }else{
            return false;
        }
      }

 }


  //. Create at least 5 book objects using the class:
   //   Example: "Harry Potter", "1984", "The Hobbit", etc.
let bk1=new Book("Harry Potter","The Hobbit" ,1984)
let bk2=new Book("A Man Called Over","Fredrik Backman",320)
let bk3=new Book("It Ends With Us","Colleen Hoover",380)
let bk4=new Book("The Little Prince","Antoine de Saint-Exupéry",96)
let bk5=new Book("Animal Farm"," George Orwell ",112)

 // 2. Perform the following operations:

     // i. Display info of all books
     bk1.getInfo("Harry Potter")
     bk2.getInfo("A Man Called Over")
     bk3.getInfo("It Ends With Us")
     bk4.getInfo("The Little Prince")
     bk5.getInfo("Animal Farm")
      //ii. Borrow 2 books and show their availability status
      bk1.borrow("Harry Potter")
      bk5.borrow("Animal Farm")
      //iii. Return 1 book and show updated status
      bk1.returnBook("Harry Potter")
      //iv. Count how many books are "long books" (more than 300 pages)
      let count=0
      if(bk1.isLongBook()==true){count++}
      if(bk2.isLongBook()==true){count++}
      if(bk3.isLongBook()==true){count++}
      if(bk4.isLongBook()==true){count++}
      if(bk5.isLongBook()==true){count++}
      console.log("number of long books are ",count)
     // v. List all available books
