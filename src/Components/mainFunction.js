const Tasks = [];

// function will add new tasks

export const AddTask = (task) => {

    Tasks.push(task)
    localStorage.setItem("Tasks", JSON.stringify(Tasks))
}

// function will save the Solution of students

export const AddSubmission =(id, Solution) => {
     
    let tasks = JSON.parse(localStorage.getItem("Tasks"))
    
    // submit solution as a object contain name and solution

    let UserSolution = {
      name : JSON.parse(sessionStorage.getItem("Token")).name,
      solution : Solution,
      marks : 0
    } 
    
    //match id of submission
   
     console.log(tasks,id)
       tasks.map(item => {
           if(item.id===id){
             item.Submission.push(UserSolution)           
            }
       })

    // Update Tasks with new data
    
       localStorage.setItem("Tasks",JSON.stringify(tasks));
}

// Upload Marks of the Submission

export const AddMarks = (id, name, marks) =>{
      
      const tasks = JSON.parse(localStorage.getItem("Tasks"));

 // check task id then name of student and then upload marks     
      tasks.map(item => {
        if(item.id===id){
          item.Submission.map(sol => {
            if(sol.name === name){
              sol.marks = marks
            }
          })
        }
      })
  
 // set new value of Tasks

      localStorage.setItem("Tasks",JSON.stringify(tasks))
}