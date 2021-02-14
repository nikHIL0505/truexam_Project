import React, {useContext, useEffect}  from 'react';
import {AuthContext} from '../Provider/authProvider';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import '../App.css';

function Login(props) {
      
      // Take methods and values from AuthProvider
      const {input, setInput, error, setError, handleLogin} = useContext(AuthContext);
      
      const token = JSON.parse(sessionStorage.getItem("Token")); 
     
      //On logged in redirect to home page 

       useEffect(()=>{
        if(token){  
          setTimeout(()=>{
          props.history.push('/')
         },4)}
        })


    // save inputs or error 

      const handleChange = (e) =>{
         const {name ,value} = e.target;
           setInput(prev => ({ ...prev, [name]: value }));
           if(error.length >0 )
           setError([]) 
      }

      // Will check the users credentials
      
      const handleSubmit=(e)=>{
          e.preventDefault();
          handleLogin();    
      }

     return(
       <div className="a">
         <div className="LoginPage">
         <form onSubmit={handleSubmit}>
             <div className="LoginPage1">
             <input
             type="email"
             name="email"
             placeholder="Enter email"
             value = {input.email}
             onChange={handleChange}
             className="LoginInput"
             required/>
           <input
             type="password"
             name="password"
             placeholder="password"
             value={input.password}
             onChange={handleChange}
             className="LoginInput"
             required/>
             {error.length > 0 ? error.map(err => <p>{err}</p>) : null}
            <Button type="submit" variant="outline-danger">Login</Button>
          </div>
        </form>
      </div>
      </div>
    )
}
export default withRouter(Login);