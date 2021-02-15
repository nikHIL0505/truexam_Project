import React, { Component } from 'react';
import {AddSubmission} from './mainFunction';
import {Button} from 'react-bootstrap';
import '../App.css';
import {FiCheckCircle} from 'react-icons/fi';


class SubmitAssignment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Task : JSON.parse(localStorage.getItem("Tasks")),
            Solution:null,
            count: false
        }

     this.handleSubmit = this.handleSubmit.bind(this)
    //  this.submit = this.submit.bind(this)
    }
    handleSubmit = (e) =>{ 
        e.preventDefault()
        this.setState({
            count:true
        })
    }
      submit = (Id) => {
        AddSubmission(Id,this.state.Solution)
      }
    render() {
          const TaskItem = this.state.Task
          if(TaskItem === null){
              return (
                  <div className="a notAssigned">
                      <div className="heading">
                        <h1>Task is not assigned yet.</h1>
                     </div>
                  </div>
              )
           }
        else { 
         return ( 
            <div className="a">
               {       
               TaskItem.map(item =>
                     <div key={item.id} className="taskDetails">
                       <div className="taskDetails1">
                       <h1>Problem:</h1>
                       <h2>{item.Task}</h2>
                        <a href={item.Image} className="aTag" download><Button variant="outline-secondary" className="btn">download</Button></a>              
                       <p>{item.Details}</p>
                       </div>
                       <div className="taskDetails1 divide">
                       <h1>Solution:</h1>
                       <form onSubmit={this.handleSubmit}>
                       <input type="file"  onChange={(e)=>this.setState({Solution:e.target.value})}/>
                       <Button type="submit" className={this.state.count ? "clickFalse" : "btn"} onClick={() => this.submit(item.id)}>Submit</Button>
                       <FiCheckCircle className={this.state.count ? "clickTrue" :"clickFalse"}/>
                       </form>
                       </div>                   
                   </div>
                  )}   
            </div>
         
         )}
    }
}
 
export default SubmitAssignment;