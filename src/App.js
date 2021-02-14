import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import CreateAssignment from './Components/createAssignment';
import SubmitAssignment from './Components/submitAssignment';
import Navbar from './Navbar/navbar';
import Login from './Authentication/login';
import Home from './home';
import Logout from './Authentication/logout';
import CheckAssignment from './Components/checkAssignment';
import Result from './Components/resultOfAssignment';
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login}/>
         <Route path="/logout" component={Logout}/>
         <Route path="/dashboard" component={CreateAssignment}/>
         <Route path="/submissions" component={CheckAssignment}/>
         <Route path="/Studentdashboard" component={SubmitAssignment}/>
         <Route path="/result" component={Result}/> 
      </Switch>
    </Router>
  );
}

export default App;
