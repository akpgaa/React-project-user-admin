
 export default function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
      return (
          <div className="login-form"><form><label>First Name : </label>
          <input            
            
            type='text'
            onChange={e=>props.handleChange(e,"firstname")}
            value={props.firstname}
            
          />
          <br/>
          <br/>
           <label>Last Name :</label>
          <input            
           
            type='text'
            onChange={e=>props.handleChange(e,"lastname")}
            value={props.lastname}
            
          />
          <br/>
          <br/>
           <label>D.O.B :</label>
          <input            
            
            type='date'
            onChange={e=>props.handleChange(e,"dob")}
            value={props.dob}
           
          />
          <br/>
          <br/>

          
          <h5>Select  Gender:</h5>
                               
                               <label>
                                 <input
                                   type="radio"
                                   value="male"
                                   checked={props.size === "male"}
                                   onChange={props.handleChange1}
                                 />
                                 Male
                               </label>
                             
                               <br/>
                             <br/>
                               <label>
                                 <input
                                   type="radio"
                                   value="female"
                                   checked={props.size === "female"}
                                   onChange={props.handleChange1}
                                 />
                                 Female
                               </label>
                             <br/>
                   
                             <br/>
                               <label>
                                 <input
                                   type="radio"
                                   value="other"
                                   checked={props.size === "other"}
                                   onChange={props.handleChange1}
                                 />
                                 Other
                               </label>
                             <br/>
          
     
          </form>
              
           
             <br/>
            <br/>
          </div>
        );
        
  }
  