//i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                     export function validateTitle(title) {
                        // Your code here
                     if(!title){
                        return "title required"
                     }
                        if(title.length<=3){
                        return "characters insufficient"
                      }
                      return "title is valid"
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                     export function validatePriority(priority) {
                        // Your code here
                        if(priority==low||priority==medium||priority==high){
                          return true
                        }
                        else{
                            return false
                        }
                      }
                      
                      // 3. Validate due date (must be future date)
                    export  function validateDueDate(date) {
                        // Your code here
                        let dueDate=new Date('2026-10-20')//yyyy-mm-dd
                        let today=new Date()
                        if(dueDate>today){
                            return "task expired"
                        }
                      return true;
                      }
