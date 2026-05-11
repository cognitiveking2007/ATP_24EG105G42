//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//-------------------------------------------------------
//🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

//🎯 Task
    //1. Create a shallow copy of user
    let cpyuser={...user}
    //2. Change:
        //  i. name in the copied object
        cpyuser.name="Lalith"
         // ii. preferences.theme in the copied object
         cpyuser.preferences.theme="light"
          //iii .Log both original and copied objects
         console.log(user)
         console.log(cpyuser)
          //iv. Observe what changes and what doesn’t
          console.log("the shallow copy")

