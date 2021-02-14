import React  from 'react';

// component will represent result 

const Result = () =>{
     
    
     const marks = []
     const name = JSON.parse(sessionStorage.getItem("Token")).name
     const tasks = JSON.parse(localStorage.getItem("Tasks"))
      
   // fetch task name and marks

     tasks.map(task => {
         task.Submission.map(item => {
             if(item.name === name){
                 const Score = {
                     task:task.Task,
                     score:item.marks
                 }
                marks.push(Score) 
             }
         })
     })
     
     if(!marks.length){
         return(
               <div className="a notAssigned">
                 <div className="heading">
                     <h2>Your submission is not graded yet.</h2>
                  </div>
               </div>
               )
     }
     else {
        return(
            <div className="a">
              {marks.map((item,index) => 
              <div key={index} className="taskDetails">
                <div className="taskDetails1">
                   <h3>{`${name}, your score for task ${item.task} is ${item.score}.`}</h3>
                </div>
              </div>
              )}
            </div>
     )}

}
export default Result;