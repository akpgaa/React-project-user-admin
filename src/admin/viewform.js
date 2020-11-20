import React, { Component } from 'react';
import DataTable from "react-data-table-component"

import Axios from "axios";
import "../App.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
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
  
export default class  viewform extends React.Component{
  constructor(props) {
    super(props);
    
    this.state={
    append1 : []
  }}


  componentDidMount() {
    Axios.get("http://localhost:4000/show1").then((res) => {
      const append1 = res.data;
        //console.log(append1);
     this.setState({ append1 });
     console.log(this.state.append1);

    });
  }
  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Report";
    const headers = [["firstname", "lastname",
      "dob",
      "size",
      "python",
      "react",
      "c",
      "option1",
      "username",
      "password",
      "checked"]];

    
    const data = this.state.append1.map(elt=> [elt.firstname, elt.lastname,elt.dob,elt.size,elt.python,elt.c,elt.react,elt.option1,elt.username,elt.password,elt.checked]);
    console.log(data);

    let content = { 
      startY: 50,
      head: headers,
      body: data
    };

    let d = new Date();
    let dformat = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
    console.log(dformat);
    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("report"+dformat+".pdf")
  }

  render(){
    return(
      <div>
         <button className="button button3"><Link to={'/adminRoute'} >Go Back </Link> </button> <br/>  
       <button className="button button4" onClick={this.exportPDF}>Export PDF</button>
       <DataTable
              title="User details"
              columns={columns}
               data={this.state.append1}
                />
        {/* {this.state.append1.map((rows,index)=>{
          return(
            <tr>
            <td>
                <input value={this.state.append1[index].username}/>
            </td>
            </tr>
          )
        })} */}
               
      </div>
    )
  
  }
  
  }