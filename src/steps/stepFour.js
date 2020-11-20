


export default function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  }  
 
  
    return (
      <form >
        <h1>File Upload</h1>
        <label>12th certificate:</label>
        
        <input  
          type="file" onChange={e=>props.onChange(e,"12")}/>
 
        
        {props.progress}
        <button type="button" onClick={e=>props.uploadFile(e,"12")}>Upload</button><br/>
        
       
        <label>UG certificate:</label>
        
        
        <input type="file" onChange={e=>props.onChange(e,"ug")} /> {props.progress1}
        <button type="button" onClick={e=>props.uploadFile(e,"ug")}>Upload</button>
        <br/>
        <label>PG certificate:</label>

        
        <input type="file" onChange={e=>props.onChange(e,"pg")} />
        
         {props.progress2}
        <button type="button" onClick={e=>props.uploadFile(e,"pg")}>Upload</button>
        <br/>
       
      </form>
   )
 
}



