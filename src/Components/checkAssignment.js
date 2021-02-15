import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {AddMarks} from './mainFunction';
import {FiCheckCircle} from 'react-icons/fi';

const CheckAssignment = () => {
    
    const [marks, setMarks] = useState(null);
    const [count, setCount] = useState(false);
    // Will handle the from from default submission
 

    const handleSubmit =(e) => {
        e.preventDefault();
       setCount(true)
    }

    
    
    // Will upload the marks on assignment

    const uploadMarks = (id, name, marks) => {
       AddMarks(id, name, marks)          
    }

    // if marks assigned return or message display

     const tasks = JSON.parse(localStorage.getItem("Tasks"))
     
     if(!tasks){
        return(
            <div className="a notAssigned">
                <div className="heading">
                   <h1>No Task assigned Yet.</h1> 
               </div>
            </div>
        ) 
    }
    else {
     return(
         <div className="a">
           {tasks.map(task => <div key={task.id}>
                   <h2> Task {task.Task}:</h2>
                    {(task.Submission).length === 0 ?
                      <div className="a notAssigned">
                          <div className="heading">
                           <p>No Submission Yet</p>
                         </div>
                      </div>
                     :
                       task.Submission.map((item,index) =>
                        <div key={index} className="checkAssignment">
                        <h3>{item.name}</h3>
                        <div>
                          <label style={{fontSize:"18px"}}>Download Solution:</label>
                         <Button variant ="outline-danger" className="btn">
                           <a href={item.solution} className="aTag" download>Solution</a>
                         </Button>
                        </div>
                        <div>
                          
                        <form onSubmit={handleSubmit}>
                         <label style={{fontSize:"18px"}}>Score:</label>
                           <input 
                            type="number" 
                            name="number" 
                            placeholder="Score" 
                            onChange={(e) => {setMarks(e.target.value)}}  
                            min="1" 
                            max="10"
                            required
                           />
                           <Button type="submit" className={count ? "clickFalse" : "btn btn1"} onClick={() => {uploadMarks(task.id, item.name, marks)}}>Submit</Button>
                           <FiCheckCircle className={count ? "clickTrue" :"clickFalse"}/>
                        </form>
                       </div>
                   </div>)}      
           </div>)}
         </div>
     ) }
}
export default CheckAssignment;