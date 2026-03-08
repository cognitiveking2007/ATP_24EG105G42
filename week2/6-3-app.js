//iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  import {addTask,getAllTasks,completeTask,tasks} from './task.js'
                  // Test your module system
                  // 1. Add some tasks
                  addTask("eating","High",'2026-04-09')
                  addTask("water","High",'2026-04-09')
                  addTask("exercise","High",'2026-04-09')
                  addTask("read","High",'2026-04-09')
                  addTask("eating","High",'2026-04-09')
                  // 2. Display all tasks
                let result=getAllTasks()
                console.log("Tasks are", result)
                  // 3. Complete a task
                  for(let taskId of tasks)
                  completeTask(taskId)
                  //console.log()
                  // 4. Display all tasks again
                  console.log("Updated tasks:", getAllTasks());
