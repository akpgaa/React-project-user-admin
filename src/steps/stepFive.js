import ReactCrop from 'react-image-crop';

export default function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  }  
//    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className="App">
        <div>
          <h3>Upload your image</h3>
          <input type="file" accept="image/*" onChange={props.onSelectFile} />
        </div> 
        {props.src && (
          <ReactCrop
            src={props.src}
            crop={props.crop}
            ruleOfThirds
            onImageLoaded={props.onImageLoaded}
            onComplete={props.onCropComplete}
            onChange={props.onCropChange}
          />
        )}
<br/>
<br/>
        {props.croppedImageUrl && (
          <img alt="props.Crop" style={{ maxWidth: '100%' }} src={props.croppedImageUrl} />
        )} 
        <br/>
          {/* <button className="button button3" type="button" onClick={e=>props.uploadFile(e,"image")}>Upload</button> */}
      </div>
    );
  }
