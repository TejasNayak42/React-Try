import React,{useState} from 'react'

export default function Form (props) {
  const upClicked =()=>{
    // console.log("UpperCase'd "+text)
    let newText= text.toUpperCase()
    setText(newText);
  }
  const onHandled =(event)=>{
    // console.log(" Changing");
    setText(event.target.value)
  };
  const [text, setText] = useState('Enter text here');
  return (
<>   
  <div className="form-group">
    <h2>
      {props.heading} 
    </h2>
    <div>
      <textarea 
        className="form-control" 
        value={text}
        onChange={onHandled}
        id="exampleFormControlTextarea1" 
        rows="5"
      ></textarea>
    </div>
      <button 
        className="btn btn-primary mt-2"
        onClick={upClicked}
        >
           Convert the Text 
      </button>
  </div>

  <div 
    className="summarycontainer my-4"
    >
      <h3>Summary</h3>
      <p>
      {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters.
      Time taken to read :{0.008*text.trim().split(/\s+/).length}mins
      </p>
      <h3>Preview</h3>
      <p>
        {text}
      </p>
  </div>
</>
  )
}


