
export default function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    }   

   return (
        <div className="login-form">
            <form>
            <label>UserName</label>
            <input              
            type='text'
            onChange={e=>props.onChange1(e,"username")}
            value={props.uname}
             />
          <br/>

          <br/>
          <label>Password</label>
              <input 
          type='password'
          
          onChange={e=>props._handleNewPassword(e,"password")}
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}' />
            </form>
            
        </div>
      );
}
 


