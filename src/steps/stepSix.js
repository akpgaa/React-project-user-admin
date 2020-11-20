import "../App.css";
export default function Step5(props) {
  if (props.currentStep !== 6) {
    return null
  }  
      
        return (
            <div>
          
          
          <h3>Finish</h3>
          
          <label>
          <input
            name="checked"
            type="checkbox"
            checked={props.checked} onChange={e=>props.agree(e,"checked")}
             />
            I Agree to all <a href="https://www.google.com/">Terms and Conditions </a>
          
        </label>
<br/><br/>
        <button className="button button2" type="button" onClick={props.handleSubmit} >Finish and Save</button>
        <br/> <br/>
        <div>
    
  </div>
        
          </div>
        );
      
  }



