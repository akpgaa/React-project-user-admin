
import './App.css';
import React , {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



class home extends React.Component {

  render(){
   return (
  <div className="App">
   <Router>
        <div className="arun">
         <center>
             <h1>
                 TRAXERP<br/> TASK 2 <br/>
                 BY<br/>
                 Arunkumar Panneerselvam<br/>
             </h1>
         </center>
        
        </div>
      </Router>
  </div>
);
}
  
}

export default home;
