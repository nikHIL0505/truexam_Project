import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import CreateAssignment from './Components/createAssignment';
import SubmitAssignment from './Components/submitAssignment';
import Navbar from './Navbar/navbar';
import Footer from './footer/footer';
import Login from './Authentication/login';
import Home from './home';
import Logout from './Authentication/logout';
import CheckAssignment from './Components/checkAssignment';
import Result from './Components/resultOfAssignment';
import ProtectedRouteInstructor from './Authentication/protectedRouteInstructor';
import ProtectedRouteStudent from './Authentication/protectedRouteStudent';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/logout" component={Logout}/>
         <ProtectedRouteInstructor path="/dashboard" component={CreateAssignment}/>
         <ProtectedRouteInstructor path="/submissions" component={CheckAssignment}/>
         <ProtectedRouteStudent path="/Studentdashboard" component={SubmitAssignment}/>
         <ProtectedRouteStudent path="/result" component={Result}/> 
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
