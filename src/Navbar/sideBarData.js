import React from 'react';
import { FaHome, AiOutlineLogin, AiOutlineLogout,RiDashboardFill, RiChatNewFill,GrScorecard} from 'react-icons/all'


// function will show navbar as per role of user

export const SidebarData = () => {
   
   const token = JSON.parse(sessionStorage.getItem("Token"))

   if(token && token.role === "Student"){
    return ([
      {
        title: 'Home',
        path: '/',
        icon: <FaHome />,
        cName: 'nav-text'
      },
      {
        title:"Dashboard",
        path: "/studentdashboard",
        icon: <RiDashboardFill/>,
        cName:"nav-text"
      },
      {
        title:"Score",
        path: "/result",
        icon: <GrScorecard/>,
        cName:"nav-text"
      },
      {
        title: 'LogOut',
        path: '/logout',
        icon: <AiOutlineLogout/>,
        cName: 'nav-text'
      },
    ])
  }
   else if(token && token.role === "Instructor"){
     return([
      {
        title: 'Home',
        path: '/',
        icon: <FaHome/>,
        cName: 'nav-text'
      },
      {
          title:"Dashboard",
          path: "/dashboard",
          icon: <RiDashboardFill/>,
          cName:"nav-text"
      },
      {
        title:"Submission",
        path: "/submissions",
        icon:  <RiChatNewFill/>,
        cName:"nav-text"
      },
      {
        title: 'LogOut',
        path: '/logout',
        icon: <AiOutlineLogout/>,
        cName: 'nav-text'
      }
     ])
    }     
    else {
      return ([
       {
        title: 'Home',
        path: '/',
        icon: <FaHome/>,
        cName: 'nav-text'
       },
      {
        title: 'Login',
        path: '/login',
        icon: <AiOutlineLogin/>,
        cName: 'nav-text'
      },
     ])

     }
} 
