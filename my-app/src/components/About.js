// import React, { useState } from 'react'

export default function About(props) {
    // const [mystyle, setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const [btntext,setBtnText]=useState('Enable Dark mode')

    // const toggleStyle=()=>{
    //   if(mystyle.color==='black'){
    //     setMyStyle({
    //       color:'white',
    //       backgroundColor:'black',
    //       border:'1px solid white'
    //     })
    //     setBtnText('Enable Light mode')
    //   }
    //   else
    //   {
    //     setMyStyle({
    //       color:'black',
    //       backgroundColor:'white',
    //       border:'1px solid black'
    //     })
    //     setBtnText('Enable Dark mode')
    //   }
    // }
    let mystyle = {
      color: props.mode === 'dark' ? 'white' : 'black',
      backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
      border: props.mode === 'dark' ? '1px solid white' : '1px solid black'
    };
    
  return (
<div className="container">
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
        className="accordion-button" 
        style={mystyle} 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseOne" 
        aria-expanded="true" 
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body" style={mystyle}>
        <strong>This is the first item's accordion body.</strong> 
        It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseTwo" 
        aria-expanded="false" 
        aria-controls="collapseTwo" 
        style={mystyle}
        >
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample"style={mystyle} >
      <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button 
        className="accordion-button collapsed" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseThree" 
        aria-expanded="false"
        aria-controls="collapseThree"
        style={mystyle}
      >
        Accordion Item #3
      </button>
    </h2>
    <div 
      id="collapseThree" 
      className="accordion-collapse collapse" 
      data-bs-parent="#accordionExample" 
      style={mystyle}
    >
      <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{/* <div 
  className="btn btn-primary my-3"
    onClick={toggleStyle}
>
    {btntext}
</div> */}
</div>
  )
}
