import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "../App.css"

export default function editp(props){
     

  return(
    <div><center>  <table>
      <tr>
        <th>Full Name</th>
        <th>User Name</th>
        <th>Password</th>  
            </tr>
        <tr>
              <td><input value={props.append1.fullname} disabled/></td> 
               <td><input value={props.append1.username} disabled/></td>    
               <td><input value={props.append1.password} disabled/></td> 
    </tr>
    <tr>
              <td><input value={props.full} onChange={(e)=>props.edit(e,"full")}/></td> 
               <td><input value={props.user}  onChange={(e)=>props.edit(e,"user")}/></td>    
               <td><input value={props.pass}  onChange={(e)=>props.edit(e,"pass")}/></td> 
    </tr>
</table>
<button type="button" className="button button1" onClick={props.update}>Update</button>
</center>
    
    </div>
  )

  }