
import React, { Component } from 'react';
//import ReactCrop from 'react-image-crop';
import Axios from "axios";
import "./App.css";
import 'react-image-crop/dist/ReactCrop.css';
import Step1 from "../src/steps/step1";
import Step2 from "../src/steps/stepTwo";
import Step3 from "../src/steps/stepThree";
import Step4 from "../src/steps/stepFour";
import Step5 from "../src/steps/stepFive";
import Step6 from "../src/steps/stepSix";
     
// require("C:/Users/aruna/Desktop/Traxerp/Task 2/backend/src/public");
var isAlphanumeric = require('is-alphanumeric');

const value =[{
  value : "c",
  value1 : "python",
  value2 : "react"
}]

class main extends React.Component {
   
      state = {
            currentStep: 1,
            firstname : "",
            lastname : "",
            dob : "",
            size: '',
            c: false,
            python: false,
            react : false,
            option: "",
            password: "",
            uname: "",
            file:null,
            ug:null,
            pg:null,
            setProgess:null,
            progress1:null,
            progress2:null,
            progress3:null,
            src: null,
    crop: {
      unit: '%',
      width: 50,
      aspect: 16 / 9,
    },
    checked: false,
    files:[]
   
    
        
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
           file1 :this.state.file1,
           file2 :this.state.file2,
           file3 :this.state.file3,
           file4 :this.state.croppedImageUrl

         }
         console.log(data);
         event.preventDefault()
          Axios("http://localhost:4000/submit", {
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
              window.location=('/home')
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
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 5? 6: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
       <div>
         <button  className="button button1"         
       type="button" onClick={this._prev}  >
     Previous
     </button></div> 
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <6){
      return (
       <div> <button className="button button2"
       type="button" onClick={this._next}  >
Next
</button>  </div>      
      )
    }
    return null;
  }
   //step1 function

 onstep1Change =  (e,name) =>{
    //console.log(e.target.value);
    if(name === "firstname"){
        this.setState({
            firstname : e.target.value
      })
    }
    if(name == "lastname"){
        this.setState({
            lastname : e.target.value
      })
    } 
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
    }  
//step 2
 handleInputChange=(event,value)=>{
    console.log(value);
  if(value === "c"){
  this.setState({ c: !this.state.c });}
  if(value === "python"){
    this.setState({ python: !this.state.python });}
    if(value === "react"){
      this.setState({ react: !this.state.react });}
}
handleChange1= (event)=> {
      this.setState({
        size: event.target.value
      });
    }
handleChange2= (event)=>{
        
      this.setState({option: event.target.value});
      
    }
//Step3


_handleNewPassword=(e,value)=> {
    console.log(isAlphanumeric(e.target.value))
    if(isAlphanumeric(e.target.value) == true){
        this.setState({
            password : e.target.value
      })
    }else{
        alert("password is not Alphanumeric ")
    }
    
  }
  onChange1=(e,name)=>{
    this.setState({
        uname : e.target.value
  })
  }

//step4

onChange=(e,name)=>{
    console.log(e.target.files[0]);
    if (name === "12"){this.setState({file:e.target.files[0]})}
    if (name === "ug"){this.setState({ug:e.target.files[0]})}
    if (name === "pg"){this.setState({pg:e.target.files[0]})}
  }



uploadFile = (e,value) => {
    const formData = new FormData();    
   
    if(value === "12")  {
      formData.append('file', this.state.file); 
         console.log(formData.file)
   //let dt = { un : this.state.uname};
      // appending file
      Axios.post('http://localhost:4000/upload', formData,{
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            console.log(progress);
            this.setState({setProgess : progress});
        } }
    ).then((response)=>{
      console.log(response.data.path);
       const file1 = response.data.path;
       this.setState({file1});
    })
  }
    if(value === "ug")  {
      formData.append('file', this.state.ug);
    //  console.log(formData)
      // appending file
    Axios.post('http://localhost:4000/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            console.log(progress);
            this.setState({progress1 : progress});
        } }
    ).then((response)=>{
      console.log(response.data.path);
       const file2 = response.data.path;
       this.setState({file2});
    })}
    if(value === "image")  {
      console.log(this.state.croppedImageUrl);
     // formData.append('file', this.state.croppedImageUrl); 
      //console.log(formData.file);

      // appending file
    Axios.post('http://localhost:4000/uploadcrop', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            console.log(progress);
            this.setState({progress3 : progress});
        } }
    ).then((response)=>{
      console.log(response.data.path);
       const file4 = response.data.path;
       this.setState({file4});
    })}
    if(value === "pg")  {
      formData.append('file', this.state.pg); // appending file
    Axios.post('http://localhost:4000/upload', formData, {
        onUploadProgress: (ProgressEvent) => {
            let progress = Math.round(
            ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
            console.log(progress);
            this.setState({progress2 : progress});
        } }
    ).then((response)=>{
      console.log(response.data.path);
       const file3 = response.data.path;
       this.setState({file3});
       console.log(this.state.file3)
    })}
  
  };
// //step 5 function
onSelectFile = e => {
  console.log("calling7")
  if (e.target.files && e.target.files.length > 0) {
    const reader = new FileReader();
    reader.addEventListener('load', () =>
      this.setState({ src: reader.result })
    );
    reader.readAsDataURL(e.target.files[0]);
  }
};

// If you setState the crop in here you should return false.
onImageLoaded = image => {
  console.log("calling6")
  this.imageRef = image;
};

onCropComplete = crop => {
  console.log("calling5")
  this.makeClientCrop(crop);
};

onCropChange = (crop, percentCrop) => {
  console.log("calling4")
  // You could also use percentCrop:
  // this.setState({ crop: percentCrop });
  this.setState({ crop });
};

async makeClientCrop(crop) {
  console.log("calling3")
  if (this.imageRef && crop.width && crop.height) {
    const croppedImageUrl = await this.getCroppedImg(
      this.imageRef,
      crop,
      'newFile.jpeg'
    );
    this.setState({ croppedImageUrl });
    console.log(this.state.croppedImageUrl)
  }
}

getCroppedImg(image, crop, fileName) {
  console.log("calling2")
  const canvas = document.createElement('canvas');
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    image,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    console.log("calling1")
    canvas.toBlob(blob => {
      if (!blob) {
        //reject(new Error('Canvas is empty'));
        console.error('Canvas is empty');
        return;
      }
      blob.name = fileName;
      window.URL.revokeObjectURL(this.fileUrl);
      this.fileUrl = window.URL.createObjectURL(blob);
      resolve(this.fileUrl);
    }, 'image/jpeg');
  });
}
//step 6
agree=(event,value)=> {
    if(value === "checked"){
    this.setState({ checked: !this.state.checked });}
   
    
  }
    
render() {    
    //const { crop, croppedImageUrl, src } = this.state;        
      return (
        <React.Fragment>
        <h1>User registration</h1>
        <p>--Step {this.state.currentStep}--</p> 
  
        <form >
            
        
          {this.previousButton()}
          
       
         
          <br/>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1
            currentStep={this.state.currentStep} 
            handleChange={this.onstep1Change}
            firstname = {this.state.firstname}
            lastname = {this.state.lastname}
            dob = {this.state.dob}
            size= {this.state.size}
             handleChange1={this.handleChange1}
          />
          <Step2
            currentStep={this.state.currentStep} 
            handleInputChange={this.handleInputChange}
            handleChange2={this.handleChange2}
             value = {value}
            c= {this.state.c}
            python= {this.state.python}
            react ={this.state.react}
             selectedOption= {this.state}
           
           />

          <Step3 
            currentStep={this.state.currentStep} 
            _handleNewPassword={this._handleNewPassword}
            onChange1={this.onChange1}
            password={this.state.password}
            uname={this.state.uname}
          />
         
          <Step4 
            currentStep={this.state.currentStep} 
            onChange={this.onChange}
            progress = {this.state.setProgess}
            progress1={this.state.progress1}
            progress2={this.state.progress2}
            uploadFile={this.uploadFile}
           
          />
          <Step5
          currentStep={this.state.currentStep}
           getCroppedImg={this.getCroppedImg}
            makeClientCro={this.makeClientCro}
            onSelectFile={this.onSelectFile}
            onCropComplete={this.onCropComplete}
            onCropChange={this.onCropChange}
            crop = {this.state.crop}
             croppedImageUrl = {this.state.croppedImageUrl}
             src = {this.state.src}
             progress3={this.state.progress3}
             onImageLoaded = {this.onImageLoaded}
            uploadFile={this.uploadFile}
          />
          <Step6
          currentStep={this.state.currentStep}
          agree ={this.agree}
          checked={this.state.checked}
          handleSubmit={this.handleSubmit}
          />
          

          {this.nextButton()} 

          
        </form>
        </React.Fragment>
      );
      
    }
 
  }
  

  export default main ;