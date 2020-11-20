
import './App.css';
import main from "./main.js";
import login1 from "./login1.js";
import admin from "./admin.js";

import adminroute from "../src/adminroute"
import React , {Component} from "react";
import editp from "../src/admin/editp";
import viewp from "../src/admin/viewp";
import viewform from "../src/admin/viewform";
import editform from "../src/admin/editform"
import home from './home';


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




class App extends React.Component {

  render(){
   return (
  <div className="App">
   <Router>
        <div>
         
          <div className="header">
               <a  className="logo" ><Link to={'/home'} >TASK 2</Link></a>
              <div className="header-right">
                   <a className="active" > <Link to={'/'} > User Registration </Link> </a>
                  <a> <Link to={'/login1'} >User login</Link></a>
                <a ><Link to={'/admin'} >Admin login</Link></a>
              </div>
          </div>
         
          <Switch>
              <Route exact path='/' component={main} />
              <Route path='/login1' component={login1} />
              <Route path='/admin' component={admin} />
            
              <Route path='/adminroute' component={adminroute} />
              <Route path='/home' component={home} />
              <Route exact path='/viewadmin' component={viewp} />
              <Route path='/editadmin' component={editp} />
              <Route path='/userview' component={viewform} />
              <Route path='/useredit' component={editform}/>
          </Switch>
        </div>
      </Router>
  </div>
);
}
  
}

export default App;
