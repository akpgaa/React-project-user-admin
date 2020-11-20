
import React , {Component} from "react";
import "../App.css";
import Editp from "../admin/editp";
import Axios from "axios"

class Viewp extends React.Component{
  state={
    isedit : false,
    full  :"",
    user:"",
    pass : "",
   
  }
  isedit = (e)=>{this.setState({isedit:true})}

  
 edit = (e,name)=>{
  if(name==="full"){this.setState({full:e.target.value})}
  if(name==="user"){this.setState({user:e.target.value})}
  if(name==="pass"){this.setState({pass:e.target.value})}
  }
  update=(e)=>{
    e.preventDefault()
    console.log("calling")
    let dt = {
      user : this.state.user,
      full : this.state.full,
      pass:this.state.pass,
      user1: this.props.append1.username
      
    }
    Axios("http://localhost:4000/updateadmin", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      data : dt
  }).then((res)=>{
    console.log(res)
    alert(res.data + "Login Again to See changes");
    window.location=('/admin')
    })
    console.log("updated")
  }
render(){
  const append1 = this.props.append1;
  const edit = this.state.isedit;
    let editi;
    if(edit){
       editi = <Editp 
      append1 ={append1}
      user = {this.state.user}
      full = {this.state.full}
      pass = {this.state.pass}
      edit={this.edit}
      update={this.update}
      />
    }
   return(
  <div>
 <h1>Admin Panel</h1>
              <label> FirstName </label> -  {append1.fullname}<br/>
              <label> USERNAME </label> -  {append1.username} <br/>
              <label> PASSWORD </label> -  {append1.password} <br/>
    <button className="button button4" type="button" onClick={this.isedit} >Edit Profile</button>
   { editi}
 </div>      
)}
 

  }

  export default Viewp;