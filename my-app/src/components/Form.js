import React,{useState} from 'react'

export default function Form (props) {
  const handleUP =()=>{
    let newText= text.toUpperCase()
    setText(newText)
  }

  const handleLow =()=>{
    let newText= text.toLowerCase()
    setText(newText)
  }

  const handleSC = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    const sentenceRegex = /\.\s*(\w)/g;
    newText = newText.replace(sentenceRegex, (match, letter) => match.replace(letter, letter.toUpperCase()));
    setText(newText)
  }

  const handleCopy =()=>{
   navigator.clipboard.writeText(text)
  }
  
  const handleClear =()=>{
    let newText= ''
    setText(newText)
  }

  const onHandled =(event)=>{
    setText(event.target.value)
  }

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
        className="btn btn-primary mt-2 mx-2"
        onClick={handleUP}
        >
           UpperCase 
      </button>

      <button 
        className="btn btn-primary mt-2 mx-2"
        onClick={handleLow}
        >
           Lowercase
      </button>

      <button 
        className="btn btn-primary mt-2 mx-2"
        onClick={handleSC}
        >
           Sentence Case
      </button>

      <button 
        className="btn btn-primary mt-2 mx-2"
        onClick={handleCopy}
        >
           Copy to Clipboard
      </button>

      <button 
        className="btn btn-primary mt-2 mx-2"
        onClick={handleClear}
        >
           Clear
      </button>
  </div>

  <div 
    className="summarycontainer my-4"
    >
      <h3>Summary</h3>
      <p>
      {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters.
      </p>
      <p>
      Time taken to read :{0.004*text.trim().split(/\s+/).length} mins
      </p>
      <h3>Preview</h3>
      <p>
        {text}
      </p>
  </div>
</>
  )
}


