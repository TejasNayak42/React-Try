import React from 'react'

function Alert(props) {
  return (
    <div>
            <div className= {`alert alert-${props.alert.type}`} role="alert" >
                <div> 
                   <strong>{props.alert.type}</strong>{props.alert.msg}
                </div>
               
             </div>
    </div>
  )
}

export default Alert