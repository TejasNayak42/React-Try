import React, { useState } from 'react';
// import Alert from './Alert';
export default function Form(props) {
  const handleUP = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleSC = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    const sentenceRegex = /\.\s*(\w)/g;
    newText = newText.replace(sentenceRegex, (match, letter) =>
      match.replace(letter, letter.toUpperCase())
    );
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(" Copied to Clipboard","success")
  };

  const handleClear = () => {
    let newText = '';
    setText(newText);
    props.showAlert(" Copied to Clipboard","success")
  };

  const handleExtraSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert(" Copied to Clipboard","success")
  };

  const onHandled = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="form-group" style={{ color: props.mode === 'dark' ? 'text-white' : 'text-black' }}>
        <h2>{props.heading}</h2>
        <div>
          <textarea
            className="form-control"
            value={text}
            onChange={onHandled}
            id="exampleFormControlTextarea1"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-2 mx-2" onClick={handleUP}>
          UpperCase
        </button>

        <button className="btn btn-primary mt-2 mx-2" onClick={handleLow}>
          Lowercase
        </button>

        <button className="btn btn-primary mt-2 mx-2" onClick={handleSC}>
          Sentence Case
        </button>

        <button className="btn btn-primary mt-2 mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>

        <button className="btn btn-primary mt-2 mx-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>

        <button className="btn btn-primary mt-2 mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div
        className="summary-container my-4"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h3>Summary</h3>
        <p>
          {text.trim() === '' ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters.
        </p>
        <p>Time taken to read: {0.004 * text.trim().split(/\s+/).length} mins</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Enter text above to preview here'}</p>
      </div>
    </>
  );
}
