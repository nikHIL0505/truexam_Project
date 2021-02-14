import React, { useState } from 'react';
import {userCreadential} from '../Authentication/authUsers';
import {SignOut} from '../Authentication/authUsers'

// function will handle  data flow using React Context

const AuthProvider = (props) =>{

    const [input, setInput] = useState({email:'', password:''})
    const [error, setError] = useState([]);
    
    // Call login method from authentication file

    const handleLogin =()=>{
      userCreadential(input,setError)
    }

    // Call logout method from authentication file
    
    const handleSignOut = () =>{
       SignOut(setInput); 
    }
    return(
        <AuthContext.Provider value={{
          input,
          setInput,
          error,
          setError,
          handleLogin,
          handleSignOut
          
        }}>
         {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;
export const AuthContext = React.createContext();