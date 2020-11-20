

import React, { Component }  from "react";
import Axios from "axios";
import "./App.css";
import DataTable from "react-data-table-component";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Adminroutes from "../src/adminroute";
import Viewp from "../src/admin/viewp";


var isAlphanumeric = require('is-alphanumeric');

const columns = [
  {
    name: "First Name",
    selector: "firstname",
    sortable: true
  },
  {
    name: "Lastname",
    selector: "lastname",
    sortable: true
  },
  {
    name: "DOB",
    selector: "dob",
    sortable: true,
    
  },
  {
    name: "Gender",
    selector: "size",
    sortable: true,
    
  },
  {
    name: "Python",
    selector: "python",
    sortable: true,
    
  },
  {
    name: "c",
    selector: "c",
    sortable: true,
    
  },
  {
    name: "react",
    selector: "total",
    sortable: true,
    
  },
  {
    name: "Preferred ",
    selector: "option1",
    sortable: true,
    
  },
  {
    name: "Username",
    selector: "username",
    sortable: true,
    
  },
  {
    name: "Password",
    selector: "password",
    sortable: true,
    
  },
  {name: "Agreed to terms and conditions",
  selector: "checked",
  sortable: true,
    
  }
];


class admin extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isLoggedIn: false,
      un:"",
    pass:"" ,
    append1 : [] 
    };
  }
  onChange=(e)=>{ this.setState({un: e.target.value}) }
  
  Password=(e,value)=> {
   
    console.log(isAlphanumeric(e.target.value))
    if(isAlphanumeric(e.target.value) == true){
        this.setState({
            pass : e.target.value
      })
    }else{
        alert("password is not Alphanumeric ")
    }}

    handleLoginClick() {
    
    let dt={
      email : this.state.un,
      password: this.state.pass
    }
    console.log(dt);
      Axios("http://localhost:4000/adminlog", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dt),
        data : dt
    }).then((response)=> {
      console.log(response.data.code);
      if (response.data.code >= 400) {
        throw new Error("Bad response from server");
        alert("error ocurred");
      }    
      if (response.data.code === 200) {
        console.log("calling success") 
        //this.setState({a:true});
        console.log(response);
             const append1 = (response.data.data1);
        console.log(append1);
             this.setState({ append1 : append1});
            // window.location('/adminroutes');
        console.log(this.state.append1);
    
    this.setState({isLoggedIn: true})
      } 
      if (response.data.code=== 204) {
       
        alert("Error: Email and password does not match");
      }
      if (response.data.code === 206) {
      
        alert("Error: Email does not Exist");
      }
      console.log(response);
      //return response.json();
      
   
  })

   
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}
      onChange={this.onChange}
      Password ={this.Password}
      uname ={this.uname}
      pass = {this.pass} />;
    }

    return (
      <div>
      
        <Greeting isLoggedIn={isLoggedIn} 
        append1={this.state.append1}
        
        />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return(<div>
    
  <h1>Welcome !</h1>
 

        <Adminroutes
        append1={props.append1}/>
        <Viewp 
        append1={props.append1}
        />
  </div>
  ) 
}

function GuestGreeting(props) {
  return <h1>

  </h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting append1={props.append1} />;
  }
  return <GuestGreeting  />;
}

function LoginButton(props) {
  return (
    <div className="login-form">
        <h1>Admin Login</h1>
       
          <label>
            Username: 
            <input type="text" onChange={e=>props.onChange(e)}/>
          </label>
          <br/> <br/> <br/>
          <label>
            Password: 
            <input type="password" onChange={e=>props.Password(e)}/>
          </label><br/> <br/>
          <button className="button button1" onClick={props.onClick}>
      Login
    </button>

       
        
        </div>
   
  );
}
function LogoutButton(props) {
  return (
    <button className="button button3" onClick={props.onClick}>
      Logout
    </button>
  );
}

  export default admin;