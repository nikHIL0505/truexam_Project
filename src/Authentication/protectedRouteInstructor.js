import React from 'react'; 
import {Redirect} from 'react-router-dom';

const ProtectedRouteInstructor = (props) =>{
    const Component = props.component
    const token = JSON.parse(sessionStorage.getItem("Token"))
    
    if(!token){
        return (
            <Redirect to="/login"/>
        )
    }
    else if(token.role==="Student"){
        return(
            <Redirect to="/"/>
        )
    }
    else {
        return(
            <Component/>
        )
    }
}
export default ProtectedRouteInstructor;