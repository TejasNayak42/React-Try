import React from 'react'

function Alert(props) {
 
  return (
            <div className= {`alert alert-${props.alert.type}`} role="alert" style={{height:'50px'}} >
                <div> 
                   <strong>{props.alert.type}</strong>{props.alert.msg}
                </div>
               
             </div>
  )
}

export default Alert