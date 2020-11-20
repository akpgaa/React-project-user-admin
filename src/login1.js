

import React, { Component }  from "react";
import Axios from "axios";
import "./App.css";

var isAlphanumeric = require('is-alphanumeric');


class login1 extends React.Component {
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
      Axios("http://localhost:4000/uslog", {
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
             const append1 =response.data.results;
        console.log(append1);
             this.setState({ append1 : append1});
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
  let label = props.append1.firstname
  console.log(label)

  function toBase64(arr) {
    //arr = new Uint8Array(arr) if it's an ArrayBuffer
    return btoa(
       arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
 }
  return(
  <div>
      
  <h1>Welcome back!</h1>
              <label> FirstName </label> -  {label}<br/>
              <label> Lastname </label> -  {props.append1.lastname} <br/>
              <label> DOB </label> -  {props.append1.dob} <br/>
              <label> Gender </label> -  {props.append1.size} <br/>
              <label> Python </label> -  {props.append1.python} <br/>
              <label> C </label> -  {props.append1.c} <br/>
              <label> React </label> -  {props.append1.react} <br/>
              <label> Preferred Language </label> -  {props.append1.option1} <br/>
              <label> UserName </label> -  {props.append1.username} <br/>
              <label> Password </label> -  {props.append1.password} <br/>
              <label>Agreed to Terms and conditions </label> -  {props.append1.checked} <br/>
             <label>12th</label> 
             {/* <img src={`data:image/jpeg;base64,${toBase64(props.append1.crop.data)}`}/> */}
            
            
 
  </div>
  ) 
}

function GuestGreeting(props) {
  return <h1>Please sign in.</h1>;
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
        <h1>User login</h1>
       
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
  export default login1;