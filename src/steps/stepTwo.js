
import '../App.css';

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
     
      //  const { selectedOption } = props.s;
        return (
            <div>
          
              <br/>
            
    
            {/* <button type="submit" className="submit-button">Make your choice</button> */}
         
          <h3>Programming Languages Known</h3>
          <label>
          C:
          <input
            name="C"
            type="checkbox"
            checked={props.c} onChange={e=>props.handleInputChange(e,"c")}
             />
        </label>
        <br/> <br/>
        
          <label>
          Python:
          <input
            name="Python"
            type="checkbox"
            checked={props.python}
            onChange={e=>props.handleInputChange(e,"python")} />
        </label>
        <br/> <br/>
        <label>
          React:
          <input
            name="React"
            type="checkbox"
            checked={props.react}
            onChange={e=>props.handleInputChange(e,"react")} />
        </label>
        <br/> 
        <h4>Preferred Language</h4>
       
        <select value={props.selectedOption.option} onChange={props.handleChange2}>
            <option value={props.value.value}>C</option>
            <option value={props.value.value1}>Python</option>
            <option value={props.value.value2}>React</option>
           
          </select>
         <br/>  <br/>
        
          </div>
        );
      
  }



