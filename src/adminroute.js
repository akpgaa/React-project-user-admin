
import './App.css';
import editp from "../src/admin/editp";
import viewp from "../src/admin/viewp";
import viewform from "../src/admin/viewform";
import editform from "../src/admin/editform"
import React , {Component} from "react";



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class adminroute extends React.Component {

  render(){
   return (
     <div>
       <h2>Admin Route
     </h2>
     <br/>
        
      {/* <button className="button button3"><Link to={'/viewadmin'} > Admin Profile </Link> </button> <br/> <br/> 
      <button className="button button3"><Link to={'/editadmin'} >Edit Admin Profile </Link> </button> <br/> <br/>   */}
      <button className="button button3"><Link to={'/userview'} >View Users Form </Link> </button>  
      <button className="button button3"><Link to={'/useredit'} >Edit Users Form </Link> </button> <br/> <br/> 


</div>
  
);
}
  
}

export default adminroute;
