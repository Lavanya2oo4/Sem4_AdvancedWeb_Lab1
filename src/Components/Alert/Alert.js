import React from 'react'
import "./Alert.css"
const Alert = (props) => {

  return (
    <div id="alertDiv" hidden={props.hidden}>
      {props.text}
    </div>
  )
}

export default Alert
