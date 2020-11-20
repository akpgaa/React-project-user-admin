import React, { Component } from 'react';
import Axios from "axios";
import "../App.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
    name: "dob",
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
    selector: "react",
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
  
export default class  editform extends React.Component{
  constructor(props) {
    super(props);
    
    this.state={
    append1 : [],
    append:[],
    euser : "",
    isLoggedIn: false
   
  

  }}

edit =  (e,name,index) =>{
    //console.log(e.target.value);
    if(name === "firstname") { this.setState({ firstname : e.target.value}) }
    if(name === "lastname"){this.setState({lastname : e.target.value})}
    if (name === "dob") { 
        let ND = new Date(e.target.value);
  
        ND.setMonth(ND.getMonth());
        var dt = new Date(ND);
        let da = dt.getDate();
        if (da < 10) {
          da = "0" + da;
        }
        let mth = dt.getMonth() + 1;
        if (mth < 10) {
          mth = "0" + mth;
        }
        let yr = dt.getFullYear();
        let ED = yr + "-" + mth + "-" + da;
     
        this.setState({dob : ED});
      }
      if(name === "size"){this.setState({size : e.target.value})}
      if(name === "c"){this.setState({c : e.target.value})}
      if(name === "python"){this.setState({python : e.target.value})}
      if(name === "react"){this.setState({react : e.target.value})}
      if(name === "option"){this.setState({option : e.target.value})}
      if(name === "uname"){this.setState({uname : e.target.value})}
      if(name === "password"){this.setState({password : e.target.value})}
      if(name === "checked"){this.setState({checked : e.target.value})}
    }  

  handleSubmit = event => {

      
    if(this.state.checked== false){
      alert("You must agree");
      
    }else{
      var data={
        firstname : this.state.firstname,
         lastname : this.state.lastname,
         dob : this.state.dob,
         size : this.state.size,
         python : this.state.python,
         react : this.state.react,
         c : this.state.c,
         option : this.state.option,
         uname : this.state.uname,
         password : this.state.password,
         checked : this.state.checked,
         
       
       }
       //console.log(data);
      //  event.preventDefault()
        Axios("http://localhost:4000/update", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
          data : data
      }).then(function(response) {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          console.log(response.data.code);
          if (response.data.code === 200) {
            alert("successfully added");
            window.location=('/adminroute')
          } 
          if(response.data.code === 400){
            alert("Username is already taken")
          }
          //return response.json();
      }).catch(function(err) {
         // console.log(err)
         if(err == "Error:"){
           alert("username is already taken")
         }
      })
        
    }
   
  }

componentDidMount() {
    Axios.get("http://localhost:4000/show1").then((res) => {
      const append1 = res.data;
        //console.log(append1);
     this.setState({ append1 });
     console.log(this.state.append1);

    });
  }
view = (e)=>{this.setState({euser :e.target.value})  }
get = ()=>{
  let dt = { un : this.state.euser}
  Axios.post("http://localhost:4000/viewuser",dt).then((res)=>{
    const append = res.data;
    //console.log(append);
 this.setState({ append : append });
 console.log(this.state.append);
 this.setState({ isLoggedIn : true });

  })

}
submit = (e)=>{
  
  e.preventDefault()
  console.log("calling")
  let dt = {
    firstname : this.state.firstname,
    lastname : this.state.lastname,
    dob : this.state.dob,
    size : this.state.size,
    python : this.state.python,
    react : this.state.react,
    c : this.state.c,
    option : this.state.option,
    uname : this.state.uname,
    password : this.state.password,
    checked : this.state.checked,
   username: this.state.append.username
     
  }

  console.log(dt)
  Axios("http://localhost:4000/updateuser", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    data : dt
}).then((res)=>{
  console.log(res)
  alert(res.data );
  window.location=('/adminroute')
  })
  console.log("updated")
}

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button1;

    if (isLoggedIn) {
      button1 = <Edit
      append ={this.state.append}
      edit ={this.edit} 
      submit = {this.submit}
      />;
    }
    return(
      <div>
         <button className="button button3"><Link to={'/adminRoute'} >Go Back </Link> </button> <br/>  
        
        <h3>List of Users</h3>
        {
          this.state.append1.map((rows,index)=>{
            return (
              <li>
              {this.state.append1[index].username}
              </li>
            )
          })
        } 
        
         <h4>Enter which user you want to edit</h4>
        <input type="text" value={this.state.euser} onChange={(e)=>this.view(e)}/>
        <button className="button button1"  type ="button" onClick={this.get}>Submit</button><br/><br/>
            
        {button1}
     
      </div>
    )
  
  }
  
  }


  function Edit(props){
    return(
      <div>
     
          <label> FirstName </label> -  {props.append.firstname}       
                     <input value={props.firstname} onChange={(e)=>props.edit(e,"firstname")}/> <br/>
              <label> Lastname </label> -   {props.append.lastname}              
                   <input value={props.lastname}  onChange={(e)=>props.edit(e,"lastname")}/>   <br/>
              <label> DOB </label> -   {props.append.dob}               
                      <input type="date" value={props.dob}  onChange={(e)=>props.edit(e,"dob")}/><br/>
              <label> Gender </label> -  {props.append.size} 
                       <input value={props.size}  onChange={(e)=>props.edit(e,"size")}/><br/>
              <label> Python </label> -  {props.append.python} 
                   <input value={props.python}  onChange={(e)=>props.edit(e,"python")}/><br/>     
              <label> C </label> -   {props.append.c}
                     <input value={props.c} onChange={(e)=>props.edit(e,"c")}/> <br/>
              <label> React </label> -   {props.append.react} 
                   <input value={props.react}  onChange={(e)=>props.edit(e,"react")}/><br/> 
              <label> Preferred Language </label> -   {props.append.option1}  
                      <input value={props.option} onChange={(e)=>props.edit(e,"option")}/><br/>
              <label> UserName </label> -  {props.append.username} 
                     <input value={props.username} onChange={(e)=>props.edit(e,"uname")}/><br/>
              <label> Password </label> -   {props.append.password}  
                    <input value={props.password} onChange={(e)=>props.edit(e,"password")}/><br/>
              <label>Agreed to Terms and conditions </label> -  {props.append.checked} 
                      <input value={props.checked} onChange={(e)=>props.edit(e,"checked")}/><br/> 
             <br/>
           <button type="button" className="button button4" onClick={props.submit}>Update</button>
      </div>
    )
  }