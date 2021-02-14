import React, {Component} from 'react';
import {AddTask} from './mainFunction';
import {Button} from 'react-bootstrap';
import '../App.css';

class CreateAssignment extends Component {
    state = { 
        Task_name : "",
        Image: '',
        Editing_Details:""
     }

    // function will change set State as the input

    handleChange = (e) => {
      const name = e.target.name
      const value = e.target.value
      this.setState({
          [name]: value
      })
    }
    
    //function will save the data in device storage

    handleSubmit = (e) => {
        e.preventDefault()
     
    // Generate Id using array length    

        let Id = 0;
        if(JSON.parse(localStorage.getItem("Tasks")) === null)
         { Id = 1 }

        else Id = JSON.parse(localStorage.getItem("Tasks")).id + 1
    
    // save all data as object 

       const Data = {
          id : Id,
          Task : this.state.Task_name,
          Details : this.state.Editing_Details,
          Image : this.state.Image,
          Submission:[]
       }
       AddTask(Data);    
    }

    render() { 
        return ( 
            <div className="a">
                <div className="createTask">
                 <h2>Create Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="Task_name"
                    placeholder="Task Name"
                    value={this.state.Task_name}
                    onChange={this.handleChange}
                    className="taskInput inputInside"
                    />
                    <input
                    type="file"
                    name="Image"
                    value={this.state.Image}
                    onChange={(e) => this.setState({Image: e.target.value})}
                    className="taskInput"
                    />
                    <textarea
                    type="text"
                    name="Editing_Details"
                    placeholder="Details"
                    value={this.state.Editing_Details}
                    onChange={this.handleChange}
                    rows={10}
                    cols={40}
                    className="taskInput inputInside"
                    />
                    <Button type="submit" className="btn">Upload</Button>
                </form>
                </div>
            </div>
         );
    }
}
 
export default CreateAssignment;