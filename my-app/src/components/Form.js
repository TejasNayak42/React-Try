import React,{useState} from 'react'

export default function Form (props) {
  const upClicked =()=>{
    console.log("UpperCase'd "+text)
    let newText= text.toUpperCase()
    setText(newText);
  }
  const onHandled =(event)=>{
    console.log(" Changing");
    setText(event.target.value)
  };
  const [text, setText] = useState("Enter text here");
  return (
   
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

  )
}


