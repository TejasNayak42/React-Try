import React from 'react'

function Alert(props) {
  const capital=(word)=>{
    const low= word.toLowerCase();
    return low.charAt(0).toUpperCase()+low.slice(1)

  }
  return (
    <div>
            <div className= {`alert alert-${props.alert.type}`} role="alert" >
                <div> 
                   <strong>{capital(props.alert.type)}</strong>{props.alert.msg}
                </div>
               
             </div>
    </div>
  )
}

export default Alert