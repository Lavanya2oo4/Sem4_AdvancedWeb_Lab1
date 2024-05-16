import React from 'react'
import "./CustomButton.css"

const CustomButton = (props) => {
  return (
    <div>
      <button id="customBtn">{props.title}</button>
    </div>
  )
}

export default CustomButton
