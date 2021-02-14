import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../Provider/authProvider';

const Logout = (props) => {
   const {handleSignOut} = useContext(AuthContext)
   
   useEffect(()=>{
     handleSignOut();
      setTimeout(()=>{
         props.history.push('/')
      },6)
    })

   return (
       <div className="a">
           <h2>SignOut</h2>
       </div>
   )
}
export default Logout;