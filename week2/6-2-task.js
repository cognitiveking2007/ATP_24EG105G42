//ii. task.js - Task operations
                    // TODO: Import validator functions
                     import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                     export const tasks = [];
                    
                    // 1. Add new task
                    export function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                      if(!validateTitle()&& !validatePriority()&& !validateDueDate){
                       return "invalid task"
                      }
                      tasks.push({title,priority,dueDate})
                    }
                    
                    // 2. Get all tasks
                   export function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    let taskId=tasks.findIndex(tasks=>tasks.title)
                    // 3. Mark task as complete
                   export function completeTask(taskId) {
                      // Find task and mark as complete
                     console.log("completed tasks are ",tasks[taskId])
                      }
                    

                  // Export functions